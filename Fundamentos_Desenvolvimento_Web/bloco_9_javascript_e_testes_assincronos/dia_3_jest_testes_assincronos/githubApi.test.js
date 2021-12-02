// const { describe, test, expect } = require('@jest/globals');
// const fetch = require('node-fetch');

// const getRepos = (url) => (
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.map((repo) => repo.name))
// );

// // implemente seus testes aqui
// describe('Exercícios de prática', () => {
//   test.only('faça um teste que verifique que os repositórios sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator se encontram nessa lista.', async () => {
//     const callFunction = await getRepos('https://api.github.com/orgs/tryber/repos');
//     expect(callFunction.includes('sd-01-week4-5-project-todo-list')).toBeTruthy();
//     expect(callFunction.includes('sd-01-week4-5-project-meme-generator')).toBeTruthy()
//   })
// })

// 1 - beforeEach' v
// 1 - test v
// 1 - afterEach v
// 1 - beforeEach' v
// 2 - beforeEach v
// '2 - test' v
// '1 - afterEach' x
// '2 - afterEach' x

// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });