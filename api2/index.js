const express = require('express')
const routes = require('./src/routes')
const app = require('./src/app')

const port = 3000

//routes(app)

app.listen(port, () => console.log(`Aplicação Rodanto na Porta: ${port}`))

module.exports = app