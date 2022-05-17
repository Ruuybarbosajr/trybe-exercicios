const services = require('../services/BooksService')

async function getAll (_req, res) {
  try {
    const books = await services.getAll()
    return res.status(200).json(books)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

async function getById (req, res) {
  const { id } = req.params
  try {
    const book = await services.getById(id)
    return res.status(200).json(book)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

async function create (req, res) {
  const {title, author, pageQuantity} = req.body
  try {
    const newBook =  await services.create(title, author, pageQuantity)
    return res.status(201).json(newBook)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

async function update (req, res) {
  const { id } = req.params
  const { title, author, pageQuantity } = req.body
  try {
    const updateBook = await services.update(id, title, author, pageQuantity)
    return res.status(200).json(updateBook)
  } catch (error) {
    return res.status(404).json({message: error.message})
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update
}