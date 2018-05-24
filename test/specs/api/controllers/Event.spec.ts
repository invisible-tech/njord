import * as assert from 'assert'
import * as express from 'express'
import 'mocha'
import * as sinon from 'sinon'
import { Response } from 'superagent'
import * as supertest from 'supertest'
import { app } from '../../../../src/api/index' // eslint-disable-line unicorn/import-index
import { events } from '../../../../src/models/events'

const request = supertest(app)
const sandbox = sinon.sandbox.create()

describe('createEvent', () => {
  beforeEach(() => {
    sandbox.stub(events, 'create').resolves()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('should return a 200 status code and an empty object for valid inputs', () =>
    request
      .post('/api/v1/event')
      .set({ Authorization: `Bearer ${process.env.NJORD_API_TOKEN}` })
      .send({ name: 'newInstance', metadata: {} })
      .expect(200)
  )

  it('should throw 401 if the token doesn\'t match', () =>
    request
      .post('/api/v1/event')
      .set({ Authorization: 'Bearer invalidToken' })
      .send({ name: 'newInstance', metadata: { data: false } })
      .expect(401)
  )
})
