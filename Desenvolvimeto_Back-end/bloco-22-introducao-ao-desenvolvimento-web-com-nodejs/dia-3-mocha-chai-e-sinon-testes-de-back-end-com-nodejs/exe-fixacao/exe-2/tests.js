const { expect } = require('chai');

const leArquivo = require('./leArquivo');
const sinon = require('sinon')
const fs = require('fs');
const { beforeEach, afterEach } = require('mocha');

const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

describe('leArquivo', () =>{
  describe('Quando o arquivo existe', () => {
    describe('a resposta', () => {
      beforeEach(() => {
        sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO)
      })
  
      afterEach(() => {
        fs.readFileSync.restore();
      })


      it('é uma string', () => {
        const resposta = leArquivo('arquivo.txt');
        expect(resposta).to.be.a('string');
      });

      
      it('é igual ao conteúdo do arquivo', () => {
        const result = leArquivo('arquivo.txt')
        expect(result).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });

      it('é chamado', () => {
        fs.readFileSync.restore();
        const call = sinon.spy(fs, 'readFileSync');
        leArquivo('arquivo.txt');
        expect(call.called).true;
      });

      it('é chamado com', () => {
        fs.readFileSync.restore();
        const callWith = sinon.spy(fs, 'readFileSync');
        leArquivo('arquivo.txt');
        expect(callWith.calledWith('arquivo.txt', 'utf8')).true;
      });
    })
  })


  describe('Quando o arquivo não existe', () => {
    describe('a resposta', () => {
      it('a resposta é igual a "null"', () => {
        const resposta = leArquivo('arquivo_que_nao_existe.txt');
        expect(resposta).to.be.equal(null);
      });
    })
  })
})