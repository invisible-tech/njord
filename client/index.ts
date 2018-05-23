'use strict'

import * as logger from '@invisible/logger'
import * as env from 'env-var'
import * as got from 'got'
import * as url from 'url'

const NJORD_HOSTNAME: string = env.get('NJORD_HOSTNAME').required().asString()
const NJORD_API_TOKEN: string = env.get('NJORD_API_TOKEN').required().asString()

const NJORD_ENDPOINT = url.resolve(NJORD_HOSTNAME, '/api/v1/event')

const recordEvent = ({ name, metadata }: { name: string, metadata: object }): Promise<object> =>
  got.post(
    NJORD_ENDPOINT,
    {
      body: { name, metadata },
      headers: { authentication: `Bearer ${NJORD_API_TOKEN}` },
      json: true,
    },
  )

export { recordEvent }
