import * as express from 'express'
import { createEvent } from '../controllers/Event'
import { authentication } from '../middlewares/authentication'

const router: express.Router = express.Router()

router.post('/api/v1/event', authentication, createEvent)

export = router
