// import { render, screen } from '@testing-library/react';
const func = require('./service');

test('verifica se o retorno é um número', () => {
  const callFunction = func.randomNumber();
  expect(isNaN(callFunction)).toBeFalsy();
})

test('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
  // Utilize o mock e defina o retorno padrão como 10.
  func.randomNumber = jest.fn().mockReturnValue(10)
  const callFunction = func.randomNumber();

  expect(func.randomNumber).toHaveBeenCalled()
  expect(callFunction).toBe(10)
  expect(func.randomNumber).toBeCalledTimes(1)
})

test('Teste se a função foi chamada e a nova implementação de divisão foi aplicada.', () => {

  func.randomNumber = jest.fn().mockImplementation((fistNumber, secondNumber) => {
    // deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo
    return fistNumber / secondNumber
  })

  const callFunction = func.randomNumber(10, 5)
  expect(func.randomNumber).toHaveBeenCalled()
  expect(callFunction).toBe(2)
})

test('Faça os testes que achar necessário.', () => {
  // Utilize o mock e desenvolva uma nova implementação que receba três parâmetros
  func.randomNumber = jest.fn((fistNumber, secondNumber, ThirdNumber) => {
    // Retorne a multiplicação dos parâmetros.
    return fistNumber * secondNumber * ThirdNumber
  })

  const callFunction = func.randomNumber(2, 2, 2)
  expect(func.randomNumber).toHaveBeenCalled()
  expect(callFunction).toBe(8)
  expect(func.randomNumber).toBeCalledTimes(1)

  // Resete sua implementação
  func.randomNumber.mockReset()
  expect(func.randomNumber(2, 2, 2)).toBeUndefined()
  expect(func.randomNumber).toBeCalledTimes(1)

  func.randomNumber = jest.fn((fistNumber) => {
    // Crie uma nova, que receba apenas um parâmetro e retorne o dobro.
    return fistNumber * 2
  })

  expect(func.randomNumber(4)).toBe(8)
  expect(func.randomNumber).toBeCalledTimes(1)
})

test('teste de mock', () => {
  // Desenvolva uma nova implementação para a primeira função

  expect(func.upperCase('carro do ovo')).toBe('CARRO DO OVO')

  const mockUpperCase = jest.spyOn(func, 'upperCase')

  expect(mockUpperCase('carro do ovo')).toBe('CARRO DO OVO')
  //expect(mockUpperCase('CARRO DO OVO')).toBe('carro do ovo')

  expect(func.fistLetter('uno da escada')).toBe('u')

  // Defina, para a segunda função, uma nova implementação
  func.fistLetter = jest.fn((string) => {
    // ela deve retornar a última letra de uma string
    return string[string.length - 1]
  })
  expect(func.fistLetter('uno da escada')).toBe('a')

  expect(func.concatStrings('havainas', 'de pau')).toBe('havainas de pau')
  // Implemente na terceira função

  func.concatStrings = jest.fn((fistString, secondString, thirdString) => {
    // Ela deve receber três strings e concatená-las.
    return `${fistString} ${secondString} ${thirdString}`
  })

  expect(func.concatStrings('havainas', 'de pau', 'ha ha ha')).toBe('havainas de pau ha ha ha')

  // restaure a implementação da primeira função.
  func.upperCase.mockRestore()
  expect(func.upperCase('carro do ovo')).toBe('CARRO DO OVO')
})

test('mockar request api', async () => {



  // global.fetch = jest.fn(() => Promise.resolve({
  //   json: jest.fn(() => Promise.resolve({
  //     message: "https://images.dog.ceo/breeds/collie-border/n02106166_2198.jpg",
  //     status: "success"
  //   }))
  // }))

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue('sucess')

  await expect(global.fetch()).resolves.toBe('sucess')

  global.fetch.mockReset()

  global.fetch.mockRejectedValue('failed')
  await expect(global.fetch()).rejects.toBe('failed')
})
