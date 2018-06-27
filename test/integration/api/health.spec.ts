import * as dotenv from 'dotenv'
import * as env from 'env-var'

import 'mocha'

import * as http from 'http'
import * as request from 'superagent'

import { expect } from 'chai'
import { app } from '../../../src/api/app'

dotenv.config()

describe('health endpoint', () => {
  let server: http.Server

  const NJORD_URL = env.get('NJORD_URL').required().asString()
  const PORT = env.get('PORT').required().asString()
  const endpoint = 'api/health'

  before(done => { server = app.listen(PORT, done) })
  after(done => { server.close(done) })

  it('should respond with a 204 OK message', async () => {
    const response = await request
      .get(`${NJORD_URL}/${endpoint}`)
      .set('Authorization', 'Bearer 1234567')
      .set('Accept', 'application/json')

    expect(response)
      .to.have.property('statusCode')
      .to.equal(204)
  })
})
