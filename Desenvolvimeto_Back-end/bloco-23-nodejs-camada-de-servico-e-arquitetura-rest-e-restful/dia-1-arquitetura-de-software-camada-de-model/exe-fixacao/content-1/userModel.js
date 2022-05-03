const db = require('./db')

async function getUser (username) {
  return db.findOne({username}).then(response => response || null)
}

module.exports = {
  getUser,
}