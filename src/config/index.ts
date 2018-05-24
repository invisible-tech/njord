import * as env from 'env-var'

export const NODE_ENV = env.get('NODE_ENV', 'developer').asString()
export const PORT: number = env.get('PORT', '3006').asInt()
export const NJORD_API_TOKEN: string = env.get('NJORD_API_TOKEN').required().asString()
export const DB_CONNECTION_STRING: string = env.get('DB_CONNECTION_STRING').required().asString()
export const DB_TEST_CONNECTION_STRING: string = env.get('DB_TEST_CONNECTION_STRING').required().asString()
