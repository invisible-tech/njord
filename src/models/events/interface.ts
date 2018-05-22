import { Document } from 'mongoose'

export interface IEvent extends Document { // tslint:disable-line interface-name
  name: string,
  timestamp: number,
  metadata: object,
}
