const sinon = require('sinon')
const { expect } = require('chai')

const movieModel = require('../../models/movieModel')
const connection = require('../../models/connection')

describe('Insere um novo filme no DB', () => {

  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  before(async () => {
    const execute = [{insertId: 1}]

    sinon.stub(connection, 'execute').resolves(execute)
  })

  after(async () => connection.execute.restore())



  describe('quando é inserido com sucesso', () => {

    it('retorna um objeto', async () => {
      const response = await movieModel.create(payloadMovie)

      expect(response).to.be.a('object')
    })

    it('tal objeto possui o "id" no novo filme inserido', async () => {

      const response = await movieModel.create(payloadMovie)

      expect(response).to.be.property('id')

    })

  })
})



