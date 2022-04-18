const fs = require('fs').promises;

// fs.writeFile('./myFile.txt', 'carro do ovo, passando na sua rua !!!\n')
//   .then(() => console.log('Arquivo escrito com sucesso'))
//   .catch((error) => console.error(error.message))

// utilizando o async / await

async function main(){
  try {
    fs.writeFile('myFile.txt', 'carro do ovo, passando na sua rua !!\n');
    console.log('Arquivo escrito com sucesso');
  } catch (error) {
    console.error(error.mesage);
  }
}

main();
