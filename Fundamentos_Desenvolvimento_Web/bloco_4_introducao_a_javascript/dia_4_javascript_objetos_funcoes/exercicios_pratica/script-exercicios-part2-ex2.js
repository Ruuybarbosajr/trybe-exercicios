/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor. */

let arr = [2, 3, 6, 7, 10, 1];

function biggerValue (arrTest){
  let bigger = 0;
  let positionIndex = 0;
  for (let index = 0; index < arrTest.length; index++){
    if (bigger < arrTest[index]){
      bigger = arrTest[index];
      positionIndex = index;
    }
  }
  return positionIndex;
}
console.log(biggerValue(arr))