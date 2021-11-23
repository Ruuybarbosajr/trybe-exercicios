const books = require('./dataFor2-3-4');

// const expectedResult = {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// };

const bookBiggerOfLengthName = books.reduce((accBiggerLength, tokenAuthor) =>
	accBiggerLength.name.length > tokenAuthor.name.length
		? accBiggerLength
		: tokenAuthor
);
console.log(bookBiggerOfLengthName);
