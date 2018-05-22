'use strict'

import * as dotenv from 'dotenv'
dotenv.config()

import * as logger from '@invisible/logger'

import * as api from './api'
import * as mongodb from './config/mongodb'
import { events } from './models/events'

let isCleaningUp: boolean = false
const cleanup = ({ code = 0, message, err }: { code?: number , message?: string, err?: Error }) => {
  if (isCleaningUp) return
  else isCleaningUp = true

  if (err) logger.error(err)
  else if (message) logger.info(message)

  logger.info('Cleaning up before exit')
  mongodb.close()
  api.stop()

  process.exit(code)
}

process
  .on('exit', () => cleanup({ message: 'Process exited' }))
  .on('SIGINT', () => cleanup({ message: 'Process received SIGINT' }))
  .on('uncaughtException', (err: Error) => cleanup({ code: 1, err }))
  .on('unhandledRejection', (err: Error) => cleanup({ code: 1, err }))

api.init()
mongodb.init()

export { api, mongodb }
