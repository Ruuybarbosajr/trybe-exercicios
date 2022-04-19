function verifyPositivo(number){
  if(isNaN(number)) return 'o valor deve ser um número';
  if(number > 0) return 'positivo';
  if(number < 0) return 'negativo';
  return 'neutro';
}

const fs = require('fs');

function writeInFile(fileName, fileContent){
  try {
    fs.writeFileSync(fileName, fileContent);
    return 'OK'
  } catch (error) {
    throw new Error('ALGO DE ERRADO NÃO ESTÁ CERTO');
  }
}


module.exports = {
  verifyPositivo,
  writeInFile
};