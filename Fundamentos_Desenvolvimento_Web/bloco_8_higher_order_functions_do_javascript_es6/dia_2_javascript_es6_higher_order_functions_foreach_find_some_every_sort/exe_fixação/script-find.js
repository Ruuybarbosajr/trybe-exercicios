const numbers = [19, 21, 30, 3, 45, 22, 15];
const verifyEven = (number) => number % 2 === 0;
const isEven = numbers.find(verifyEven);

//! passando um array como parâmetro, ele ira retorna o elemento quando
//! a condição for true.

console.log(isEven); // 30
console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

//! o retorno de find é um valor boolean, então nesse exemplo conseguimos ver que
//! passado como parâmetro um valor real, ele retorna true ou false, e não elemento
//! que satisfaz a condição.

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);
console.log(isEven2); // 30

//? exerccios de fixação:

//* 1 -----------
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (divisorOne, dividorTwo) => {
	return numbers.find(
		(element) => element % divisorOne === 0 && element % dividorTwo === 0
	);
};

console.log(findDivisibleBy3And5(5, 3));

//* 2 -----------

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (numberOfLetter) => {
	return names.find((element) => element.length === numberOfLetter);
};

console.log(findNameWithFiveLetters(5));

//* 3 ------------

const musicas = [
	{ id: '31031685', title: 'Partita in C moll BWV 997' },
	{ id: '31031686', title: 'Toccata and Fugue, BWV 565' },
	{ id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(id) {
	return musicas.find((element) => id === element.id);
}

console.log(findMusic('31031685'));
