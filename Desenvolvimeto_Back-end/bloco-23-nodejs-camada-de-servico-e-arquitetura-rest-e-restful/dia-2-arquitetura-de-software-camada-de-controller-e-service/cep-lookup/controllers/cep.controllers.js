const cepServices =  require('../services/cep.services')

async function getCep (req, res, next) {
  const { cep } = req.params
  try {
    const response = await cepServices.getCep(cep)
    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}

async function postCep (req, res, next) {
  const {cep, logradouro, bairro, localidade, uf } = req.body
  try {
    const response = await cepServices.postCep({cep, logradouro, bairro, localidade, uf })
    return res.status(201).json(response)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getCep,
  postCep,
}