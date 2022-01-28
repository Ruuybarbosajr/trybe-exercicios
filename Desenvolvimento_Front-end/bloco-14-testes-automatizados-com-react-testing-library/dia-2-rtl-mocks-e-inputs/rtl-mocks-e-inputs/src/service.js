// Crie uma função que gere um número aleatório

function randomNumber() {
  // Defina uma função que gere um número aleatório entre 0 e 100.
  return Math.floor(Math.random() * 100);
}

// Crie três funções.
// Desenvolva a primeira função: essa função deve recebe uma string e retorná-la em caixa alta.
function upperCase(string) {
  return string.toUpperCase();
}

// Crie a segunda função: ela recebe uma string e deve retornar só a primeira letra.
function fistLetter(string) {
  return string[0];
}

// Elabore a terceira função: essa função deve receber duas strings e concatená-las.
function concatStrings(fistString, secondString) {
  return `${fistString} ${secondString}`
}

// Crie uma função que faça requisição para a api dog pictures .

async function requestApi() {
  const request = await fetch('https://dog.ceo/api/breeds/image/random')
  const response = await request.json();
  return response;
}

module.exports = { randomNumber, upperCase, fistLetter, concatStrings, requestApi };