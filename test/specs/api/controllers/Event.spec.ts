'use strict'

import * as express from 'express'
import 'mocha'
import * as sinon from 'sinon'
import { Response } from 'superagent'
import { app } from '../../../../src/api/index' // eslint-disable-line unicorn/import-index
import { events } from '../../../../src/models/events'

// tslint:disable-next-line no-var-requires
const request = require('supertest')(app)

const sandbox = sinon.sandbox.create()

describe('createEvent', () => {
  afterEach(() => {
    sandbox.restore()
  })

  it('should work', () => {
    sandbox.stub(events, 'create').callsFake(async () => ({ happy: 'people' }))

    request
      .post('/api/v1/event')
      .set({ authentication: `Bearer ${process.env.NJORD_API_TOKEN}` })
      .send({ name: 'newInstance', metadata: {} })
      .expect(200)
      .end((err: Error, res: Response) => {
        if (err) throw err
      })
  })
})
