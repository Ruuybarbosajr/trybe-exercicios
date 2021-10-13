// 4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let meddia = 0;

for (let index = 0; index < numbers.length; index++){
  sum += numbers[index];
}
meddia = sum / numbers.length;

if( meddia > 20){
  console.log('Valor maior que 20')
}else{
  console.log('Valor menor ou igual a 20')
}
