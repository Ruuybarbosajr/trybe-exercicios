/* 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word . */

let wordOne = 'trybe';
let wordTwo = 'be';

function testWordEnding (word, ending){
  wordTesting = word.split('').reverse().join('');
  endingTesting = ending.split('').reverse().join('');
  let anwser = false;
  for (index = 0; index < word.length; index++){
    if( endingTesting[index] == wordTesting[index]){
      anwser = true;
    }else{
      break;
    }
  }
  return anwser;
}
console.log(testWordEnding(wordOne,wordTwo))