// const asyncSum = (a, b, callback) => {
// 	setTimeout(() => {
// 		const result = a + b;
// 		callback(result);
// 	}, 500);
// };

// test('Testando asyncSum, soma 5 mais 10', (done) => {
// 	asyncSum(5, 10, (result) => {
// 		try {
// 			expect(result).toBe(15);
// 			done();
// 		} catch (error) {
// 			done(error);
// 		}
// 	});
// });

// Não passa, falso-positivo:

// test('Não deveria passar!', () => {
// 	setTimeout(() => {
// 		expect(10).toBe(5);
// 		console.log('Deveria falhar!');
// 	}, 500);
// });

// const uppercase = (str, callback) => {
// 	setTimeout(() => {
// 		callback(str.toUpperCase());
// 	}, 1000);
// };

// it(' Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.', (done) => {
// 	function helpFunction(str) {
// 		try {
// 			expect(str).toBe('RUY BARBOSA');
// 			done();
// 		} catch (error) {
// 			done(error);
// 		}
// 	}
// 	uppercase('ruy barbosa', helpFunction);
// });

// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./exe_prática/script-09');

describe('A função getPokemonDetails', () => {
	it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
		// Escreva aqui seu código
		const MessageError = new Error('Não temos esse pokémon para você :(');
		function callbackTest(err, message) {
			try {
				expect(MessageError).toEqual(err);
				done();
			} catch (error) {
				done(error);
			}
		}
		getPokemonDetails(({ name }) => name === 'Bulbasur', callbackTest);
	});

	it('retorna um pokemon que existe no banco de dados', (done) => {
		// Escreva aqui seu código
		const messageFromProfOak =
			'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';
		function callbackTest(err, message) {
			try {
				expect(messageFromProfOak).toBe(message);
				done();
			} catch (error) {
				done(error);
			}
		}
		getPokemonDetails(({ name }) => name === 'Bulbasaur', callbackTest);
	});
});
