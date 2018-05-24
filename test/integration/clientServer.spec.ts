import * as logger from '@invisible/logger'
import * as assert from 'assert'
import * as env from 'env-var'
import * as express from 'express'
import { get } from 'lodash/fp'
import 'mocha'
import * as sinon from 'sinon'
import { recordEvent } from '../../client'
import * as api from '../../src/api'
import { events } from '../../src/models/events'

const sandbox = sinon.sandbox.create()

describe('Integration test between Client/Server', () => {
  before(api.init)
  after(api.stop)
  afterEach(() => {
    sandbox.restore()
  })

  it('should send a request from the client to the server to record the event', async () => {
    const event = {
      name: 'test',
      metadata: { test: 'tester' },
    }
    const stub = sandbox.stub(events, 'create').resolves()

    // Create a new event
    const actual = await recordEvent(event)

    sinon.assert.calledWithMatch(stub, event)
  })
})
