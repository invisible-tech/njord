'use strict'

import * as mongodb from '@invisible/mongoose'

import { Config } from './index'

export function init (): void {
  mongodb.initConnection(
    Config.NODE_ENV === 'test'
      ? Config.DB_TEST_CONNECTION_STRING
      : Config.DB_CONNECTION_STRING
  )
}

export function close (): void {
  mongodb.dbShutdown()
}
