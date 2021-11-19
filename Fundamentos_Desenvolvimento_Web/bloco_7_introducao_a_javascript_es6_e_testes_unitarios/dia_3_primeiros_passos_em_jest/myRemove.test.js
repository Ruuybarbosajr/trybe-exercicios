const { expect, it } = require('@jest/globals');
const myRemove = require('./myRemove.js');

describe(' A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
	it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
		const arr = [1, 2, 3, 4];
		expect(myRemove(arr, 3)).not.toContain(3);
	});
	it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
		const arr = [1, 2, 3, 4];
		expect(myRemove(arr, 3)).not.toEqual(arr);
	});
	it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
		const arr = [1, 2, 3, 4];
		expect(myRemove(arr, 5)).toEqual(arr);
	});
});
