const cepModels = require('../models/cep.models')

async function getCep (cep) {
  const response = await cepModels.getCep(cep.replace(/-/g, ''))

  if (!response.length) {
    const error = { "status": 404, "message": "CEP não encontrado" }
    throw error
  }
  return response
}

async function postCep (address) {
  address.cep = address.cep.replace(/-/g, '')

  const response = await cepModels.postCep(address)
  return response
}

module.exports = {
  getCep,
  postCep
}