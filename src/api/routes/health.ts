import * as express from 'express'

const healthRoutes: express.Router = express.Router()

healthRoutes.get('/api/health', (req: any, res: any) => {
  res.sendStatus(204)
})

export = healthRoutes
