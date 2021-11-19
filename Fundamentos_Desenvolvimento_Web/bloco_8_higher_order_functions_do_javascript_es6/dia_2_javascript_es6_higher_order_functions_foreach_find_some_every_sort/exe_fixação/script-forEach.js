//* tabuada do dois usando forEach:

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const multipliesFor2 = (element) => {
	console.log(`${element} * 2: ${element * 2}`);
};
numbers.forEach(multipliesFor2);

//* utilizando o segundo parâmetro, além do obrigatório: index.
//* ele é a posição do elemento sobre o array que está sendo percorrido, ou seja, usando uma lógica
//* já utilizada antes em um for, usando names[index], é o mesmo que name do forEach

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];
const convertToUpperCase = (name, index) => {
	names[index] = name.toUpperCase();
};
names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

//? exe de fixação:

const emailListInData = [
	'roberta@email.com',
	'paulo@email.com',
	'anaroberta@email.com',
	'fabiano@email.com',
];

const showEmailList = (email) => {
	console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList); //? chamada do forEach com a função que irá executar a ação como parâmetro
