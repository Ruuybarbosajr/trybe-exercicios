const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const {getAll, getById, create, update} = require('./controllers/BooksController')
require('dotenv').config()

app.use(express.json())

app.get('/books', getAll)
app.get('/books/:id', getById)
app.post('/books', create)
app.put('/books/:id', update)

app.listen(PORT, () => console.log(`PAI TA ON NA PORTA:${PORT}`))

