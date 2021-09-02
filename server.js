/* eslint-disable no-console */
const express = require('express')
const app = express()
const port = 3000
const db = require('./config/database')
const authorRoutes = require('./routes/authorRoutes')
const genreRoutes = require('./routes/genreRoutes')
const titleRoutes = require('./routes/titleRoutes')

// Authenticate DB connection
db.authenticate()
  .then(() => console.log('connected'))
  .catch((err) => console.log('error!', err))

// Author Routes
app.use('/authors', authorRoutes)
app.use('/genres', genreRoutes)
app.use('/titles', titleRoutes)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

