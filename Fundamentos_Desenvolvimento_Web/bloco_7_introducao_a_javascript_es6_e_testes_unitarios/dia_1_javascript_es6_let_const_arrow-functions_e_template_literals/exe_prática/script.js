// Agora você vai fazer alguns exercícios de fixação.
// Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .

// function testingScope(escopo) {
// 	if (escopo === true) {
// 		var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
// 		ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
// 		console.log(ifScope);
// 	} else {
// 		var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
// 		console.log(elseScope);
// 	}
// 	console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

// const testingScope = (escopo) => {
// 	if (escopo == true) {
// 		let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
// 		ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
// 		console.log(ifScope);
// 	} else {
// 		let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
// 		elseScope = `${elseScope} Não devo ser utilizada fora meu escopo (else)`;
// 		console.log(elseScope);
// 	}
// 	// ifScope is not defined
// 	console.log(ifScope + ' o que estou fazendo aqui ? :O');
// };
// testingScope(true);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// console.log(oddsAndEvens.sort((a, b) => a - b));

// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .

// 1 - Crie uma função que receba um número e retorne seu fatorial.

// - Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// - Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const factorialOfNumber = (number) => {
	for (let index = number - 1; index >= 1; index -= 1) {
		number *= index;
	}
	return number;
};
console.log(factorialOfNumber(4));

const factorialOfNumber = (number) =>
	number > 0 ? number * factorialOfNumber(number - 1) : (number = 1);
console.log(factorialOfNumber(5));

//  2 Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = (phrase) => {
	const biggerWord = phrase.split(' ');
	let biggerLength = phrase[0];
	for (let index of biggerWord) {
		index.length > biggerLength.length
			? (biggerLength = index)
			: (biggerLength = biggerLength);
	}
	return biggerLength;
};

console.log(
	longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')
);

// 3 -  Crie uma página que contenha:

// - Um botão ao qual será associado um event listener ;
// - Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// - Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const btnClick = document.getElementById('buttonClick');
const count = document.getElementById('count');
let clickCount = 0;

btnClick.addEventListener('click', () => {
	count.innerText = clickCount += 1;
});

// 4 - Crie um código JavaScript com a seguinte especificação:

// - Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"

// - Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .

// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .

const changeString = (string) => {
	let phrase = 'Tryber x aqui!';
	return phrase.replace(/x/g, string);
};

const mySkills = [
	'Comunicação',
	'Flexibilidade',
	'Pensamento Criativo',
	'Sociabilidade',
	'Vontade de Ajudar',
	'Liderença',
];

const concatenation = (changeString) => {
	let skills = '';
	mySkills
		.sort((a, b) => {
			return a.toLowerCase().localeCompare(b.toLowerCase());
		})
		.forEach((element) => {
			skills += `- ${element}
	`;
		});
	return `${changeString} Minhas seis principais habilidades são:
	${skills}
	
	#goTrybe`;
};

console.log(concatenation(changeString('DEU CERTÃO')));
