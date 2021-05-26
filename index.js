const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mainRouter = require('./mainRoutes')
const classRouter = require('./classRoutes')

const port = process.env.PORT || 3000

app.use('/cdn', express.static('public'))

app.use(bodyParser.json())

app.use('/', mainRouter)
app.use('/class', classRouter)
app.listen(port)
console.log(`Express server running on port ${port}`)
