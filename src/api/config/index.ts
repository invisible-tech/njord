'use strict'

import * as env from 'env-var'

export const PORT: number = env.get('PORT', '3011').asInt()
export const NJORD_API_TOKEN: string = env.get('NJORD_API_TOKEN').required().asString()
export const DB_CONNECTION_STRING: string = env.get('DB_CONNECTION_STRING').required().asString()
export const DB_TEST_CONNECTION_STRING: string = env.get('DB_TEST_CONNECTION_STRING').required().asString()
