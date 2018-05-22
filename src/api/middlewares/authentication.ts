'use strict'

import { NextFunction, Request, Response } from 'express'
import { UNAUTHORIZED } from 'http-status'

import { NJORD_API_TOKEN } from '../config'

export const authentication = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authentication === `Bearer ${NJORD_API_TOKEN}`) next()
  else res.sendStatus(UNAUTHORIZED)
}
