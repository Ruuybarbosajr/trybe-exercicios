const { expect } = require('chai');
const Sinon = require('sinon');
const { verifyPositivo, writeInFile } = require('./index')

describe('A função testa um número e verifique se é positivo, negativo ou neutro', () => {
  describe('Retorna positivo quando', () => {

    it('O número for 5', () => {
      const result = verifyPositivo(5);
      expect(result).to.be.equal('positivo');
    });


    it('O número for 10', () => {
      const result = verifyPositivo(10);
      expect(result).to.be.equal('positivo');
    });

  })

  describe('retorna negativo quando', () => {

    it('O número for -5', () => {
      const result = verifyPositivo(-5);
      expect(result).to.be.equal('negativo');
    });


    it('O número for -10', () => {
      const result = verifyPositivo(-10);
      expect(result).to.be.equal('negativo');
    });

  })

  describe('retorna neutro quando', () => {

    it('O número for 0', () => {
      const result = verifyPositivo(0);
      expect(result).to.be.equal('neutro');
    });

  })
})

describe('A função deve retorna um "warning"', () => {
  it('se não for um número retorna "o valor deve ser um número"', () => {
    const result = verifyPositivo('string');
    expect(result).to.be.equal('o valor deve ser um número');
  })
})

describe('A função deve retornar', () => {
  it('um "OK" se for feita a escrita no arquivo', () => {
    const result = writeInFile('arquivo.txt', 'OLHA O GÁÁÁÁÁÁÁÁÁÁÁS');
    expect(result).to.be.equal('OK');
  })
})