const mysql = require('mysql2/promise')

const connection = mysql.createPool({
  host: '172.19.0.2',
  user: 'root',
  password: 'docker',
  database: 'cep_lookup',
  port: 3306
})

module.exports = connection