/* 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N. */

let number = 5;
function sum(numberOfSum){
  let sumNumber = 0;
  for (index = 0; index < numberOfSum; index++){
    sumNumber += index + 1
  }
  return sumNumber
}
console.log(sum(number))