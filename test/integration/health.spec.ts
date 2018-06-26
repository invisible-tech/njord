import 'dotenv/config'
import 'mocha'

import { app } from '../../src/api/app'

import * as supertest from 'supertest'

const request: any = supertest(app)

describe('health endpoint', () => {
  const endpoint = '/api/health'

  it('should respond with a 204 OK message', async () => {
    await request
      .get(endpoint)
      .set('Authorization', 'Bearer 1234567')
      .set('Accept', 'application/json')
      .expect(204)
  })
})