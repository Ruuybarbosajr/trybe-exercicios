import mysql from 'mysql2/promise'

export default mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'docker',
  database: 'books_api'
})