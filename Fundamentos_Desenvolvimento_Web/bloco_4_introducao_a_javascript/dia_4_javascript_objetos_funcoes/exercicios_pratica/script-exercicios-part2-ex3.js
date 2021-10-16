/* 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor. */

let arr = [2, 4, 6, 7, 10, 0, -3];

function lessValue (arrTest){
  let less = arrTest[0];
  let positionIndex = 0;
  for (let index = 0; index < arrTest.length; index++){
    if (less > arrTest[index]){
      less = arrTest[index];
      positionIndex = index;
    }
  }
  return positionIndex;
}
console.log(lessValue(arr))