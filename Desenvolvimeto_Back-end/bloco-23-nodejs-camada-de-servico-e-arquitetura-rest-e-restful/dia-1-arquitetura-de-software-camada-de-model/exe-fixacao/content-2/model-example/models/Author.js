const connection = require('./connection')

function getNewAuthors ({id, firstName, middleName, lastName}) {
  const fullName = [firstName, middleName, lastName]
    .filter(name => name)
    .join(' ')

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  }
}

function serialize (authorData) {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name
  }
}


async function getAll () {
  const [author] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors'
  );

  return author.map(serialize).map(getNewAuthors)
}


async function getAllBooks () {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM books'
  )

  return books
}

async function getBookById (id) {
  const [book] = await connection.execute(
    'SELECT * FROM books WHERE id = ?', [id]
  )
  
  if (!book.length) return null

  return book
}

async function getByAuthorId (id) {
  const [books] = await connection.execute(
    'SELECT * FROM books WHERE author_id = ?', [id]
  )

  if (!books.length) return null

  return books
}

async function findById (id) {
  const [author] = await connection.execute(
    'SELECT * FROM authors WHERE id = ?', [id]
  )
  
  if (!author.length) return null

  return author.map(serialize).map(getNewAuthors)
}

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

async function createAuthor (firstName, lastName, middleName) {
  await connection.execute(
    'INSERT INTO authors (first_name, last_name, middle_name) VALUES(?, ?, ?)', [firstName, lastName, middleName]
  )
}

async function isValidBook (title, author_id) {
  const [authorIsValid] = await connection.execute(
    'SELECT * FROM authors WHERE id = ?', [author_id]
  )

  if (!title || title.length < 3) return false
  if (!author_id || !authorIsValid.length) return false
  return true
}

async function createBook (title, author_id) {
  await connection.execute(
    'INSERT INTO books (title, author_id) VALUES (?, ?)' , [title, author_id]
  )
}

module.exports = {
  getAll,
  getAllBooks,
  getBookById,
  getByAuthorId,
  findById,
  createAuthor,
  isValid,
  createBook,
  isValidBook
}