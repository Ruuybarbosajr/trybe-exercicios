function validateCep (req, _res, next) {
  const { cep } = req.params
  const regex = /\d{5}-?\d{3}/gm
  if (!regex.test(cep)) {
    const error = { "status": 400, "message": "CEP inválido" }
    return next(error)
  }
  next()
}

module.exports = validateCep