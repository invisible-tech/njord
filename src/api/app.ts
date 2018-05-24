import * as logger from '@invisible/logger'
import * as bodyParser from 'body-parser'
import * as express from 'express'
import * as swaggerUi from 'swagger-ui-express'

import { errorHandler, logErrorHandler } from './middlewares/errorHandler'
import * as eventRoutes from './routes/event'

const app: express.Express = express()

// Setup a route for swagger documentation
if (process.env.NODE_ENV !== 'production') {
  // tslint:disable-next-line no-var-requires
  const swaggerDocument: object = require('./docs')
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}

app.use(bodyParser.json())

// Routes imported from the routes folder
app.use(eventRoutes)

app.use(logErrorHandler)
app.use(errorHandler)

export { app }
