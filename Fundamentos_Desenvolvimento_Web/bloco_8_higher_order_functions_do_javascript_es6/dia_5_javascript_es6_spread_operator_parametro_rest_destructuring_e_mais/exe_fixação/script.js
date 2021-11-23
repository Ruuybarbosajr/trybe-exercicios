// Faça uma lista com as suas frutas favoritas
const specialFruit = ['manga', 'pera', 'goiaba'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['uva', 'laranja', 'banana'];

const fruitSalad = (fruit, additional) => {
	return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
//------------------------
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
// saudacoes[1](saudacoes[0]); // Olá
const [saudacoesOla, funcao] = saudacoes;
funcao(saudacoesOla);
//-----------------------
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
const newArr = [comida, animal, bebida];
const [cat, water, food] = newArr;
console.log(cat, water, food);

// ----------------------------

const getNationality = ({ firstName, nationality = 'Brazilian' }) =>
	`${firstName} is ${nationality}`;

const person = {
	firstName: 'João',
	lastName: 'Jr II',
};

const otherPerson = {
	firstName: 'Ivan',
	lastName: 'Ivanovich',
	nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

// -----------------------------------
const getPosition = (latitude, longitude) => ({
	latitude,
	longitude,
});

console.log(getPosition(-19.8157, -43.9542));

// -----------------------------------
const multiply = (number, value = 1) => {
	return number * value;
};

console.log(multiply(8));
