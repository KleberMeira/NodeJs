const express = require('express')

const app = express()

const index = require('./Routes/index')
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use(index)

module.exports = app