// const printName = () => {
//   const myName = "Lucas";
//   return myName;
// }
// console.log(printName());

const printName = (myName) => `olá meu nome é ${myName}`;
console.log(printName('ruy'));

// em casos de mais de um parâmetro, não podemos omitir os parênteses.
const sum = (numberOne, numberTwo) => numberOne + numberTwo;
console.log(sum(5, 9));
