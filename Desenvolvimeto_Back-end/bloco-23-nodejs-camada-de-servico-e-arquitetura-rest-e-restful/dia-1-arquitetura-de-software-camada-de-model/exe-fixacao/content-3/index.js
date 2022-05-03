const express = require('express')
const cors = require('cors')
const schema = require('./joi')
const fs = require('fs/promises')

const app = express()
const PORT = 3000


app.use(express.json())
app.use(cors())

const tutu = async () => {
  try {
    const db = JSON.parse(await fs.readFile('db.json', 'utf8'))
    return db
  } catch (error) {
    return []
  }
}

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body

  const { error } = schema.validate({firstName, lastName, email, password})

  if(error) return res.json({error: true, message: error.message})

  const db = await tutu()

  const response = {
    id: db.length + 1, 
    firstName,
    lastName,
    email
  }

  await fs.writeFile('db.json', JSON.stringify([...db, response], null, 2))

  res.status(200).json(response)
})


app.get('/user', async (_req, res) => {
  const db = await tutu()

  res.status(200).json(db)
})

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;

  const db = await tutu()

  const findUser = db.find(user => user.id === Number(id))

  if (!findUser) return res.status(404).json({error: true, message: 'Usuário não encontrado'})

  res.status(200).json(findUser)
})


app.listen(PORT, () => console.log(`PAI TA ON E ROTEANDO - PORT:${PORT}`))