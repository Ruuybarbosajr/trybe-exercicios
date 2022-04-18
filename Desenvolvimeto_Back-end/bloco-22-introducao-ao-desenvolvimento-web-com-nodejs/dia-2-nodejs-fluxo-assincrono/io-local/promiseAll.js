const fs = require('fs').promises;

async function main(){
  try {
    const promisses = await Promise.all([
      fs.readFile('./file1.txt', 'utf8'),
      fs.readFile('./file2.txt', 'utf8'),
      fs.readFile('./file3.txt', 'utf8')
    ])
    console.log(`${promisses[0]}${promisses[1]}${promisses[2]}`)
  } catch (error) {
    console.error(error.message)
  }
} 

main();