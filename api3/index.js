const express = require('express')
const routes  = require('./src/Routes/index')
const app     = require('./src/app')

const port = 3000

app.listen(port, () => console.log(`Rodando na Porta: ${port}`))

module.exports = app