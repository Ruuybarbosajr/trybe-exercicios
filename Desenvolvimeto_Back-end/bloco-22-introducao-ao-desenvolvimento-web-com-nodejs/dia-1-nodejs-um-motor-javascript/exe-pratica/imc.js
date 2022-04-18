const readlineSync = require('readline-sync');

const weigth = readlineSync.questionInt('Qual seu peso? ');
const heigth = readlineSync.questionFloat('Qual sua altura? ');

const calcImc = (weigth, heigth) => {
  const table =

 `| IMC                                       | Situação                  |
  | ----------------------------------------- | ------------------------- |
  | Abaixo de 18,5                            | Abaixo do peso (magreza)  |
  | Entre 18,5 e 24,9                         | Peso normal               |
  | Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
  | Entre 30,0 e 34,9                         | Obesidade grau I          |
  | Entre 35,0 e 39,9                         | Obesidade grau II         |
  | 40,0 e acima                              | Obesidade graus III e IV  |`

  return `
  
  ${table}

  seu IMC é: ${(weigth / (Math.pow(heigth, 2))).toFixed(2)}`;
}


console.log(calcImc(weigth, heigth));

