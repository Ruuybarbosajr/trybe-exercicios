//  1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
const newEmployees = (callback) => {
	const employees = {
		id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
		id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
		id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
	};
	return employees;
};

const dataEmployees = (nomeCompleto) => {
	let email = `${nomeCompleto.replace(' ', '_')}@trybe.com`;
	return { nomeCompleto, email };
};

console.log(newEmployees(dataEmployees));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const resultRaffle = (betNumber, drawnNumber) => {
	if (betNumber === drawnNumber) return 'Parabéns, você ganhou!';
	return 'Tente novamente!';
};

const raffle = (betNumber, callback) => {
	let drawnNumber = parseInt(Math.random() * 5);
	return callback(betNumber, drawnNumber);
};

console.log(raffle(4, resultRaffle));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// - Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corretResponse = (template, responseStudent) => {
	let score = 0;
	responseStudent.forEach((element, index) => {
		if (element === template[index]) score += 1;
		if (element !== template[index]) {
			element === 'N.A' ? (score += 0) : (score -= 0.5);
		}
	});
	return `Nota do estudante: ${score}`;
};
const resultOfStudent = (template, responseStudent, callback) => {
	return callback(template, responseStudent);
};

console.log(resultOfStudent(rightAnswers, studentAnswers, corretResponse));
