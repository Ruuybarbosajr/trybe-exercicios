// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...numbers) => numbers.reduce((accSum, number) => accSum + number);
console.log(sum(2, 5, 2, 45, 2));
