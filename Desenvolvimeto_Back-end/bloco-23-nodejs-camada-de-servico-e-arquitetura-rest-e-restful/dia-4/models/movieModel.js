const connection = require('./connection')

async function create ({title, directedBy, releaseYear}) {
  const [result] = await connection.execute(
    `INSERT INTO movies (tile, directed_by, release_year)
    VALUES (?,?,?)`, [title, directedBy, releaseYear]
  )

  return {
    id: result.insertId,    
  }
}


module.exports = {
  create,
}