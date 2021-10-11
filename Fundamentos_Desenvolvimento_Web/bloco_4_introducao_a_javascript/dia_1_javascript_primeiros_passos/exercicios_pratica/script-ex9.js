/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .*/

const numberOne = 20;
const numberTwo = 10;
const numberThree = 12;

if ( numberOne % 2 != 0 || numberTwo % 2 != 0 || numberThree % 2 != 0 ){
  console.log(true)
}else{
  console.log(false)
}
