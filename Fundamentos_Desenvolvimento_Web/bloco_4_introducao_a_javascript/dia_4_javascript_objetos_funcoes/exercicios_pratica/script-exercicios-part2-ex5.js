/* 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete. */

let arr = [2, 3, 2, 5, 8, 2, 3, 2];

function moreRepetition (arrTest){
  let numberRepetition = 0;
  let numberMoreRepetition = 0;
  let anwser = 0;
  for (index = 0; index < arrTest.length; index++){
    for (secondIndex = 0; secondIndex < arrTest.length; secondIndex++){
      if (arrTest[index] == arrTest[secondIndex]){
        numberRepetition++
      }
    }
    if(numberRepetition > numberMoreRepetition){
      numberMoreRepetition = numberRepetition
      anwser = arrTest[index]
    }
    numberRepetition = 0;
  }
  return anwser
}

console.log(moreRepetition(arr))