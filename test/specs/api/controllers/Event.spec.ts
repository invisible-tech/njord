import * as assert from 'assert'
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
  beforeEach(() => {
    sandbox.stub(events, 'create').callsFake(async () => ({ happy: 'people' }))
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('should return a 200 status code and an empty object for valid inputs', () => {
    request
      .post('/api/v1/event')
      .set({ Authorization: `Bearer ${process.env.NJORD_API_TOKEN}` })
      .send({ name: 'newInstance', metadata: {} })
      .expect(200)
      .end((err: Error, res: Response) => {
        assert.deepStrictEqual(res.body, {})
        if (err) throw err
      })
  })

  it('should throw 401 if the token doesn\'t match', () => {
    request
      .post('/api/v1/event')
      .set({ Authorization: 'Bearer invalidToken' })
      .send({ name: 'newInstance', metadata: {} })
      .expect(401)
      .end((err: Error, res: Response) => {
        if (err) throw err
      })
  })
})
