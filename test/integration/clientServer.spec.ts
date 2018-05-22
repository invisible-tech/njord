'use strict'

import * as dotenv from 'dotenv'
dotenv.config()

import 'mocha'
import * as assert from 'assert'
import * as logger from '@invisible/logger'
import * as env from 'env-var'
import * as sinon from 'sinon'
import * as express from 'express'
import { recordEvent } from '../../client'
import { events } from '../../src/models/events'

// Init mongo and app servers
import '../../src/index' // eslint-disable-line unicorn/import-index

describe('Integration test between Client/Server', () => {
  beforeEach(async () => {
    await events.deleteMany({})
  })

  afterEach(async () => {
    await events.deleteMany({})
  })

  it('should work', async () => {
    // Create a new event
    await recordEvent({
      name: 'test',
      metadata: { test: 'tester' },
    })

    const newEvent = await events.findOne({ name: 'test' })
    assert(newEvent)
  })
})
