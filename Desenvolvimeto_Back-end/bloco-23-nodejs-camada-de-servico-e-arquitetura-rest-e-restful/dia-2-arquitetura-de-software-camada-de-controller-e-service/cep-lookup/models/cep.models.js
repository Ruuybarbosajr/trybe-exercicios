const connection = require('./connection')

async function getCep (cep) {
  const [findCep] = await connection.execute(
    'SELECT * FROM ceps WHERE cep = ?', [cep]
  )

  return findCep
}

async function postCep ({cep, logradouro, bairro, localidade, uf }) {
  console.log(cep)
  const [addCep] = await connection.execute(
    `INSERT INTO ceps (cep, logradouro, bairro, localidade, uf)
    VALUES (?, ?, ?, ?, ?)`, [cep, logradouro, bairro, localidade, uf]
  )

  console.log(addCep)
}

module.exports = {
  getCep,
  postCep
}