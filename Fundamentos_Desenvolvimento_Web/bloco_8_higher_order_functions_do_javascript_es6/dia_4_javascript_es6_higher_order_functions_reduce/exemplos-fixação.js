// const collection = [1, 2, 3, 4, 5];

// const getSum = (accumulator, number) => {
// 	console.log(accumulator); // 1 3 6 10
// };

// const sumNumbers = collection.reduce(getSum);
// console.log(sumNumbers); // 15

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// const newArrEven = numbers
// 	.filter((element) => element % 2 === 0)
// 	.reduce((accumulator, element) => accumulator + element);
// console.log(newArrEven);

// const newArrEven = numbers.reduce((accumulator, numbers) =>
// 	numbers % 2 === 0 ? accumulator + numbers : accumulator
// );
// console.log(newArrEven);

const estudantes = [
	{
		nome: 'Jorge',
		sobrenome: 'Silva',
		idade: 14,
		turno: 'Manhã',
		materias: [
			{ name: 'Matemática', nota: 67 },
			{ name: 'Português', nota: 79 },
			{ name: 'Química', nota: 70 },
			{ name: 'Biologia', nota: 65 },
		],
	},
	{
		nome: 'Mario',
		sobrenome: 'Ferreira',
		idade: 15,
		turno: 'Tarde',
		materias: [
			{ name: 'Matemática', nota: 59 },
			{ name: 'Português', nota: 80 },
			{ name: 'Química', nota: 78 },
			{ name: 'Biologia', nota: 92 },
		],
	},
	{
		nome: 'Jorge',
		sobrenome: 'Santos',
		idade: 15,
		turno: 'Manhã',
		materias: [
			{ name: 'Matemática', nota: 76 },
			{ name: 'Português', nota: 90 },
			{ name: 'Química', nota: 70 },
			{ name: 'Biologia', nota: 80 },
		],
	},
	{
		nome: 'Maria',
		sobrenome: 'Silveira',
		idade: 14,
		turno: 'Manhã',
		materias: [
			{ name: 'Matemática', nota: 91 },
			{ name: 'Português', nota: 85 },
			{ name: 'Química', nota: 92 },
			{ name: 'Biologia', nota: 90 },
		],
	},
	{
		nome: 'Natalia',
		sobrenome: 'Castro',
		idade: 14,
		turno: 'Manhã',
		materias: [
			{ name: 'Matemática', nota: 70 },
			{ name: 'Português', nota: 70 },
			{ name: 'Química', nota: 60 },
			{ name: 'Biologia', nota: 50 },
		],
	},
	{
		nome: 'Wilson',
		sobrenome: 'Martins',
		idade: 14,
		turno: 'Manhã',
		materias: [
			{ name: 'Matemática', nota: 80 },
			{ name: 'Português', nota: 82 },
			{ name: 'Química', nota: 79 },
			{ name: 'Biologia', nota: 75 },
		],
	},
];

const reportStudent = estudantes.map((element) => ({
	nome: element.nome,
	materias: element.materias.reduce((accumulator, matter) =>
		accumulator.nota > matter.nota ? accumulator : matter
	).name,
}));
console.log(reportStudent);
