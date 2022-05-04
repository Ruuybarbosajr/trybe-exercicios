const joi = require('joi')

const schema = joi.object({
  cep: joi.string().required(),
  logradouro: joi.string().required(),
  bairro: joi.string().required(),
  localidade: joi.string().required(),
  uf: joi.string().required()
})


function validationAdress (req, _res, next) {
  const { cep, logradouro, bairro, localidade, uf } = req.body
  const { error } = schema.validate({cep, logradouro, bairro, localidade, uf })
  const regex = /\d{5}-\d{3}/
  if (error || regex.test(cep)) return next({status: 400, message: error.message})
  next()
}

module.exports = validationAdress