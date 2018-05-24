import * as logger from '@invisible/logger'
import * as http from 'http'
import { PORT } from '../config'
import { app } from './app'

let server: http.Server

const init = () => {
  server = app.listen(PORT, (err: Error) => {
    if (err) logger.info(err)
    else logger.info(`Server is listening on ${PORT}`)
  })
}

const stop = () => {
  if (server.close) {
    server.close(() => {
      logger.info('Server closed.')
    })
  } else {
    logger.warn('Server not started.')
  }
}

export { app, init, stop }
