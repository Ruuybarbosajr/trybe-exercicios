
let algorismoRomano = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
} //OBJETO COM AS CHAVES E SEUS RESPECTIVOS VALORES

function romanAlgorithmism(string) {
  let number = []; 
  let result = 0;
  for (let index = 0; index < string.length; index++) { // FOR PARA PERCORRER A VARIÁVEL RECEBIDA
    for (let key in algorismoRomano) {  // FOR/IN PARA BUSCAR A CHAVE
      if (string[index] == key) { // CONDICIONAL PARA VER IGUALDADE ENTRE STRING E CHAVE
        number[index] = algorismoRomano[key] //RECEBE O VALOR DA CHAVE DENTRO DE UM ARRAY
      }
    }
  }
  if (number.length > 1){ //VERIFICANDO SE FOI MAIS DE UMA CHAVE
    let fistposition = number[0] //DAQ PRA BAIXO FALTA RESOLVER
    for (let index = 1; index < number.length; index++) {
      if(number[index] > fistposition){
        result = number[index] - fistposition;
      }else{
        result = number[index] + fistposition;
      }
    }
  }else{
    result = number[0] //SE FOR APENAS UM 'SIMBOLO' RETORNA O VALOR DELE. EX: X,M,C,D ETC.
  }
  return result
}

console.log(romanAlgorithmism('II'))

