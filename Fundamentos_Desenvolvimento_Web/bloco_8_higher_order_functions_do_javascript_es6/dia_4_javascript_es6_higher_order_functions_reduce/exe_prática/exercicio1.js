// Todos os exercícios devem ser realizados utilizando reduce , e se necessário outra HOF , a informação será citada no enunciado.
// 1 - Dada uma matriz, transforme em um array.

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];
function flatten(arrays) {
	const newArrOfMatriz = arrays.reduce((accumulator, element) =>
		accumulator.concat(element)
	);
	return newArrOfMatriz;
}
console.log(flatten(arrays));
