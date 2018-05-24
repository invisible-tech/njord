import * as logger from '@invisible/logger'
import { NextFunction, Request, Response } from 'express'
import { events } from '../../models/events'
import { InternalServerError } from '../errors'

const createEvent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { name, metadata } = req.body
    const doc = { name, metadata, timestamp: Date.now() }
    await events.create(doc)
    res.json({})
    logger.debug('Event created', doc)
  } catch (err) {
    next(new InternalServerError('Failed while creating the event on the database'))
    logger.error(err)
  }
}

export { createEvent }
