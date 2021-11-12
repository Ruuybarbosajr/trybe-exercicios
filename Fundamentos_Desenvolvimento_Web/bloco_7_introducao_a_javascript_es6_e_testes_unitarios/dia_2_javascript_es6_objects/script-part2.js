const lesson1 = {
	materia: 'Matemática',
	numeroEstudantes: 20,
	professor: 'Maria Clara',
	turno: 'manhã',
};

const lesson2 = {
	materia: 'História',
	numeroEstudantes: 20,
	professor: 'Carlos',
};

const lesson3 = {
	materia: 'Matemática',
	numeroEstudantes: 10,
	professor: 'Maria Clara',
	turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const modification = (object, addKey, valueKey) => {
	object[addKey] = valueKey;
	return object;
};
modification(lesson2, 'turno', 'noite');

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeysObject = (object) => {
	return Object.keys(object);
};
listKeysObject(lesson3);

// 3 - Crie uma função para mostrar o tamanho de um objeto.

const lengthObject = (object) => {
	return `Total de ${Object.keys(object).length} propriedades`;
};
lengthObject(lesson2);

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValuesObject = (object) => {
	return Object.values(object);
};
listValuesObject(lesson1);

// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons)

// const allLessons = Object.assign(lesson1, lesson1);

const allLessons = {};

allLessons.lesson1 = Object.assign({}, lesson1);
allLessons.lesson2 = Object.assign({}, lesson2);
allLessons.lesson3 = Object.assign({}, lesson3);

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalOfStudents = (object) => {
	let totalOfStudents = 0;
	for (let key in object) {
		totalOfStudents += object[key]['numeroEstudantes'];
	}
	return totalOfStudents;
};
totalOfStudents(allLessons);

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const getValueByNumber = (object, valueKey) => {
	const arrValues = Object.values(object);
	return arrValues[valueKey];
};
getValueByNumber(lesson1, 0);

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verifyPair = (object, key, value) => {
	const keyAndValue = Object.entries(object);
	let response = false;
	keyAndValue.forEach((element) => {
		element[0] === key && element[1] === value ? (response = true) : response;
	});
	return response;
};
verifyPair(lesson1, 'numeroEstudantes', 20);

// BÔNUS
// 1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const countStudentsLessonsMath = (object) => {
	const valuesObject = Object.values(object);
	let unitStudent = 0;
	valuesObject.forEach((element) => {
		element['materia'] === 'Matemática'
			? (unitStudent += element['numeroEstudantes'])
			: unitStudent;
	});
	return unitStudent;
};
countStudentsLessonsMath(allLessons);

const teacherReport = (object, teacher) => {
	const valuesObject = Object.values(object);
	const createReport = {
		professor: '',
		aulas: [],
		estudantes: 0,
	};
	valuesObject.forEach((element) => {
		if (element['professor'] === teacher) {
			createReport.professor = teacher;
			createReport.aulas.push(element['materia']);
			createReport.estudantes += element['numeroEstudantes'];
		}
	});
	return createReport;
};
teacherReport(allLessons, 'Maria Clara');
