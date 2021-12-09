const { describe, it, expect } = require('@jest/globals');
const { makeCepRequest } = require('./script');

describe('teste da API CEP lá', () => {
  it.skip('teste se retorna um bairro correto para o cep 22030001', async () => {
    await expect(makeCepRequest('22030001')).resolves.toBe('Copacabana')
  })
  it.skip('teste se ao passar um cep inválido não retorna um erro!', async () => {
    await expect(makeCepRequest('00000000')).rejects.toThrow('CEP inválido !')
  })
})