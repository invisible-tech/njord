declare module 'swagger-ui-express'
declare module '@invisible/logger'
declare module '@invisible/mongoose'
declare module 'env-var'
declare module 'mongoose-delete'
declare module 'http-status'
declare module "*.json" {
  const value: any
  export default value
}

// error TS2304: Cannot find name 'XMLHttpRequest'
declare interface XMLHttpRequest {}
// error TS2304: Cannot find name 'Blob'
declare interface Blob {}
