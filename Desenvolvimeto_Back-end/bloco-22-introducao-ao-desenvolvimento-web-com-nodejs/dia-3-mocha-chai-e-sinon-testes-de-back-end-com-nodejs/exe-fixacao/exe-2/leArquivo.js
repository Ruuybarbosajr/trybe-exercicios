const fs = require('fs');

function leArquivo(fileName){
  try {
    const contentFile = fs.readFileSync(fileName, 'utf8');
    return contentFile;
  } catch (error) {
    return null;
  }
}

module.exports = leArquivo;