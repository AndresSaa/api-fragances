import express from 'express'
import * as fraganceService from '../services/fragances/fraganceServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(fraganceService.getFragances())
})

router.post('/', (_req, res) => {
  res.send('New fragance created!')
})

export default router
