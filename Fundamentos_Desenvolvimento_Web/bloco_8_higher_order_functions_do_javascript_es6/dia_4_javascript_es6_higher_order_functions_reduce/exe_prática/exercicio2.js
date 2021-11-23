const books = require('./dataFor2-3-4');
// const expectedResult =
// 	'George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.';

const nameOfAuthor = books
	.reduce((accumulator, nameAuthor) => {
		accumulator.push(nameAuthor.author.name);
		return accumulator;
	}, [])
	.join(', ');
console.log(nameOfAuthor);
