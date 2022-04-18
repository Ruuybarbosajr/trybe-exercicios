// const fs = require('fs');

// const myFile = './myFile.txt'

// fs.readFile(myFile, 'utf8', (error, content) => {
//   if(error){
//     console.error(error.message);
//     process.exit(1)
//   }
//   console.log(content)
// })

const fs = require('fs').promises;

const myFile = './myFile.txt';

fs.readFile(myFile, 'utf8')
  .then((result) => console.log(result))
  .catch((error) => {
    console.error(error.message);
    process.exit(1)
  })