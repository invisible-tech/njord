import { Document } from 'mongoose'

export interface EventInterface extends Document {
  name: string,
  timestamp: number,
  metadata: object,
}
