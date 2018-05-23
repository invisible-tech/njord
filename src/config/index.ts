'use strict'

export const Config = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT || 3006,
  HEIMDALL_URL: process.env.HEIMDALL_URL,
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
  DB_TEST_CONNECTION_STRING: process.env.DB_TEST_CONNECTION_STRING,
}
