require('dotenv').config()
const express = require('express')
const controllers = require('./controllers/cep.controllers')
const middleware = require('./middleware')

const app = express()

app.use(express.json())

app.get('/', (_req, res) => {
  res.status(200).json({message: 'pong!'})
})

app.get('/cep/:cep', middleware.validationCep, controllers.getCep)

app.post('/cep', middleware.validationAdress, controllers.postCep)

app.use(middleware.error)

app.listen(3000, console.log(`O PAI TA ON E ROTEANDO - PORT:${3000}`))