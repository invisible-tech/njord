'use strict'

import * as logger from '@invisible/logger'
import express = require('express')

export const logErrorHandler = (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error(err)
  return next(err)
}

export const errorHandler = (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  const { status = 500, message } = err
  res.status(status || 500)
  res.json({ error: message })
}
