// 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let unitNumbersOdd = 0;

for (let index of numbers){
  if (index % 2 != 0){
    unitNumbersOdd++
  }
}
if( unitNumbersOdd > 0){
  console.log(unitNumbersOdd)
}else{
  console.log('Nenhum valor ímpar encontrado')
}