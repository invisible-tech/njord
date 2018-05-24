import * as mongodb from '@invisible/mongoose'
import { Schema } from 'mongoose'

export const schema: Schema = new Schema({
  name: { type: String },
  timestamp: { type: Number, default: Date.now },
  metadata: { type: Object },
})

const indexes: Array<Object> = [ { name: 1 }, { timestamp: 1 } ]
mongodb.addIndexes({ schema, indexes })
