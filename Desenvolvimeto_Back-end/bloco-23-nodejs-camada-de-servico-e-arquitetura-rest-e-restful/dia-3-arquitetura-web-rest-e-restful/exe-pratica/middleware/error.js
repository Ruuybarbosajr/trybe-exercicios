function error (error, _req, res, _next) {
  if (error.status) {
    return res.status(error.status).json({ message: error.message })
  }
  console.log(error.message)
  res.status(500).json({message: 'internal error'})
}

module.exports = error