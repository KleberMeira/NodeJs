const express = require('express')
const router = express.Router()

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem vindo',
    version: '1.0.0'
  })
})

module.exports = app => {
  

}