'use strict'

import * as mongodb from '@invisible/mongoose'
import { Model } from 'mongoose'
import * as softDelete from 'mongoose-delete'

import { IEvent } from './interface'
import { schema } from './schema'

schema.plugin(softDelete, { overrideMethods: 'all' })

export const events: Model<IEvent> = mongodb.upsertModel({ name: 'events', schema })
