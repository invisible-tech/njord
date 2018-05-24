import * as mongodb from '@invisible/mongoose'

import { DB_CONNECTION_STRING, DB_TEST_CONNECTION_STRING, NODE_ENV } from './index'

export function init (): void {
  mongodb.initConnection(
    NODE_ENV === 'test'
      ? DB_TEST_CONNECTION_STRING
      : DB_CONNECTION_STRING
  )
}

export function close (): void {
  mongodb.dbShutdown()
}
