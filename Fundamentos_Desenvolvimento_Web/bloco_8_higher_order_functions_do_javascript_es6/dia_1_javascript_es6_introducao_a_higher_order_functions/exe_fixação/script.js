const reapet = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count) //* action se comporta como console.log()
  }               //* pois recebeu como parâmetro o console.log
}
reapet(5, console.log)

//? ex 2:

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

//* nesse caso os dois parầmetros são o 3, e um nova função.
//* essa nova função faz uma verificação do count, pois a action quando é chamada, ela na verdade é
//* uma função para verificar se nosso count é um par ou não, atendendo a condição é feito o console.log()

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});
//? ----------------------------------------
const numberGenerator = () => {
  return Math.random() * 100;
}

console.log(numberGenerator); //! não executa !!!!

// ?------------------------ exercícios de fixação

const wakingUp = () => console.log('Acordando!!')
const breakFast = () => console.log('Bora tomar café!!')
const goSleep = () => console.log('Partiu dormir!!')

const doingThings = (myFunction) => myFunction()
doingThings(goSleep)
