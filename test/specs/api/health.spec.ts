import 'dotenv/config'
import 'mocha'

import * as supertest from 'supertest'

import { app } from '../../../src/api/app'

const request: supertest.SuperTest<supertest.Test> = supertest(app)

describe('health endpoint', () => {
  const endpoint: string = '/api/health'

  it('should respond with a 204 OK message', async () => {
    await request
      .get(endpoint)
      .set('Authorization', 'Bearer 1234567')
      .set('Accept', 'application/json')
      .expect(204)
  })
})
