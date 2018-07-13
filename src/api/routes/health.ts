import * as express from 'express'

const healthRoutes: express.Router = express.Router()

healthRoutes.get('/api/health', (req: express.Request, res: express.Response) => {
  res.sendStatus(204)
})

export = healthRoutes
