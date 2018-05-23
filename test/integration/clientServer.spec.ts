'use strict'

import * as dotenv from 'dotenv'
dotenv.config()

import * as logger from '@invisible/logger'
import * as assert from 'assert'
import * as env from 'env-var'
import * as express from 'express'
import { get } from 'lodash/fp'
import 'mocha'
import * as sinon from 'sinon'
import { recordEvent } from '../../client'
import { events } from '../../src/models/events'

// Init mongo and app servers
import '../../src/index' // eslint-disable-line unicorn/import-index

const sandbox = sinon.sandbox.create()

describe('Integration test between Client/Server', () => {
  afterEach(() => {
    sandbox.restore()
  })

  it('should send a request from the client to the server to record the event', async () => {
    sandbox.stub(events, 'create').callsFake(async () => ({ happy: 'people' }))

    // Create a new event
    const actual = get('body')(await recordEvent({
      name: 'test',
      metadata: { test: 'tester' },
    }))

    const expected = {}
    assert.deepStrictEqual(actual, expected)
  })
})
