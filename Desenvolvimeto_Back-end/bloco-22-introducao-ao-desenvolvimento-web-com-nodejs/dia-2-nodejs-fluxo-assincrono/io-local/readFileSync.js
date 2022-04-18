const fs = require('fs');

const fileName = 'myFile.txt'

try {
  const data = fs.readFileSync(fileName, 'utf8')
  console.log(data)
} catch (error) {
   console.error(error.message)
}