import express from 'express'
import fraganceRouter from './routes/fragances'

const PORT = 3000
const app = express()

app.use(express.json())

app.get('/ping', (_req, res) => {
  res.send('pong')
})

app.use('/api/fragances', fraganceRouter)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
