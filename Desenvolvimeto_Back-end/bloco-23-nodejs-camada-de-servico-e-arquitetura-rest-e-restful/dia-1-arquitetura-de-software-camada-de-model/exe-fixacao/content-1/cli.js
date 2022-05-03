const readLine = require('readline-sync')
const userModel = require('./userModel')

async function start () {
  const username = readLine.question('Digite seu nome de usuário: ')
  const user = await userModel(username)

  if (!user) {
    return console.log('Usuário não encontrado')
  }

  console.log('Aqui estão os dados do usuário')
  console.log(user)
}
start()