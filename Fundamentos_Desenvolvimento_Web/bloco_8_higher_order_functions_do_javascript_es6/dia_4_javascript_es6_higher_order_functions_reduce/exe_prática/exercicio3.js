// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const books = require('./dataFor2-3-4');

const meddiaOfAgeAuthors = books
	.reduce(
		(accAge, age) =>
			accAge + (age.releaseYear - age.author.birthYear) / books.length,
		0
	)
	.toPrecision(2);
console.log(meddiaOfAgeAuthors);
