// const fs = require('fs');

// fs.readFile('./arquivo.txt', (err, content) => {
//   if(err) {
//     console.error(err.message)
//     return
//   }

//   console.log(content.toString('utf8'))
// })

// function divNumbers(numberOne, numberTwo){
//   if(numberTwo === 0) throw new Error('Número não pode ser dividido por zero');
//   return numberOne / numberTwo;
// }

// try {
//   const resultDiv = divNumbers(2, 1)
//   console.log(resultDiv)
// } catch (error) {
//   console.error(error.message)
// }


// function divNUmbers(numberOne, numberTwo){
//   const promisse = new Promise((resolve, reject) => {
//     if(numberTwo === 0) reject(new Error('Número não pode ser dividido por zero'))
//     resolve(numberOne / numberTwo)
//   })

//   return promisse;
// }

// divNUmbers(2, 1)
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error.message))

// function readFile(fileName){
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, (error, content) => {
//       if(error) reject(error)
//       resolve(content.toString('utf8'))
//     })
//   })
// }

// readFile('./arquiavo.txt')
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error.message))