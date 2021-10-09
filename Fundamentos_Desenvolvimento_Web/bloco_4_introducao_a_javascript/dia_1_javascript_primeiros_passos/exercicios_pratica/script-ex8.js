/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false. */

const numberOne = 20;
const numberTwo = 10;
const numberThree = 15;

if ( numberOne % 2 == 1 || numberTwo % 2 == 1 || numberThree % 2 == 1 ){
  console.log(true)
}else{
  console.log(false)
}