const mysql = require('mysql2/promise')

const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'docker',
  database: 'rest_exercicios'
})

module.exports = connection