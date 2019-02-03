require('dotenv').config()

import express from 'express'
import morgan from 'morgan'

const app = express()

const { PORT = 3000, NODE_ENV = "development" } = process.env


if(NODE_ENV === 'production') {
  app.use(morgan('combined'))
}
else {
  app.use(morgan('dev'))
}


app.get('/', (req, res) => res.send('Hello World !!\n'))

app.listen(PORT, () => console.info(`🚀 Server ready at http://localhost:${PORT}`))