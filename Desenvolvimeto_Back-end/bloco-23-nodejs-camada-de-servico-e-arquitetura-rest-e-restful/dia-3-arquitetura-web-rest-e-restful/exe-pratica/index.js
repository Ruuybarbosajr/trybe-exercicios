const express = require('express')
const bodyParser = require('body-parser')
const middleware = require('./middleware')

const app = express()
const PORT = 3000

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/products', require('./controllers/productController'))

app.use(middleware.error)
app.listen(PORT, () => console.log(`PAI TA ON E ROTEANDO NA PORTA ${PORT}`))