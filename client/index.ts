import * as env from 'env-var'
import * as got from 'got'
import * as url from 'url'

const NJORD_HOSTNAME: string = env.get('NJORD_HOSTNAME').required().asString()
const NJORD_API_TOKEN: string = env.get('NJORD_API_TOKEN').required().asString()
const NJORD_ENDPOINT = url.resolve(NJORD_HOSTNAME, '/api/v1/event')

const recordEvent = async ({ name, metadata }: { name: string, metadata: object }) =>
  got.post(
    NJORD_ENDPOINT,
    {
      body: { name, metadata },
      headers: { Authorization: `Bearer ${NJORD_API_TOKEN}` },
      json: true,
    },
  ).catch()

export { recordEvent }
