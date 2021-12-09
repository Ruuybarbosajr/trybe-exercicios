const fetch = require('node-fetch');

const makeUrl = (cep) => {
  return `http://cep.la/${cep}`;
};

const makeCepRequest = async (cep) => {
  const objectOfRequest = {
    headers: { "Accept": 'application/json' },
  };
  const response = await fetch(makeUrl(cep), objectOfRequest);
  const data = await response.json();

  if (!data.bairro) throw new Error('CEP inválido !')
  if (data) return `${data.bairro}`
};

module.exports = { makeCepRequest };