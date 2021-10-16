/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for. */


function palindromo (word){
  let newWord = '';
  let anwser = false;
  for (let index = word.length - 1; index >= 0; index--){
    newWord += word[index]
  }
  if (newWord == word){
    anwser = true;
  }
  return anwser;
}
console.log(palindromo('arara'))

function palindromo (word){
  let string = word.split('').reverse().join('');
  let anwser = false;
  if (string == word){
    anwser = true;
  }
  return anwser;
}

console.log(palindromo(''))

