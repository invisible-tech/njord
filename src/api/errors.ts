'use strict'

export class InternalServerError extends Error {
  public status: number = 500
  constructor (message: string) {
    super(message)
  }
}
