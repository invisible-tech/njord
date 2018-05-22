'use strict'

import * as logger from '@invisible/logger'
import { NextFunction, Request, Response } from 'express'
import { OK } from 'http-status'

import { events } from '../../models/events'
import { InternalServerError } from '../errors'

const createEvent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { name, metadata } = req.body
    await events.create({
      name,
      timestamp: Date.now(),
      metadata,
    })
    res.json({})
  } catch (err) {
    logger.error(err)
    next(new InternalServerError('Failed while creating the event on the database'))
  }
}

export { createEvent }
