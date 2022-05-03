const express = require('express')
const Author = require('./models/Author')

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000


app.get('/', async (_req, res) => {
  const authors = await Author.getAll()

  res.status(200).json(authors)
})

app.get('/book', async (_req, res) => {
  const books = await Author.getAllBooks()

  res.status(200).json(books)
})

app.get('/book/search', async (req, res) => {
  const { id } = req.query
  const books = await Author.getByAuthorId(id)

  if (!books) return res.status(404).json({ message:'Book(s) not found' })

  res.status(200).json(books)
})

app.get('/book/:id', async (req, res) => {
  const { id } = req.params
  const [book] = await Author.getBookById(id)

  if (!book) return res.status(404).json({message: 'Book not found'})

  res.status(200).json(book)
})

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params
  const [author] = await Author.findById(id)

  if (!author) return res.status(404).json({message: 'Author not found'})

  res.status(200).json(author)
})

app.post('/authors', async (req, res) => {
  const {first_name, middle_name, last_name} = req.body

  if (!Author.isValid(first_name, middle_name, last_name)) return res.status(400).json({message: 'Dados inválidos'})

  await Author.createAuthor(first_name, middle_name, last_name)

  res.status(201).json({message: 'Autor criado com sucesso!'})
})

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body
  const isValid = await Author.isValidBook(title, author_id)
  if (!isValid) {
    return res.status(400).json({message: 'Dados inválidos'})
  }

  await Author.createBook(title, author_id)

  res.status(201).json({message: 'Livro criado com sucesso!'})
})

app.listen(PORT, console.log(`PAI TA ON E ROTEANDO -> PORT:${PORT}`))