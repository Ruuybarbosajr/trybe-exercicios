const { Book } = require('../models')

async function getAll () {
  const books = await Book.findAll()
  return books
}

async function getById (id) {
  const book = await Book.findByPk(id)
  if (!book) {
    throw {message: 'Book not found'}
  }
  return book
}

async function create (title, author, pageQuantity) {
  const book = await Book.create({title, author, pageQuantity})
  return {
    id: book.id,
    title,
    author,
    pageQuantity
  }
}

async function update (id, title, author, pageQuantity) {

  const findBook = await Book.findByPk(id)

  if (!findBook) {
    throw {message: 'Book not found'}
  }

  await Book.update({title, author, pageQuantity}, {
    where: {
      id,
    }
  })

  return {
    id,
    title,
    author,
    pageQuantity
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update
}