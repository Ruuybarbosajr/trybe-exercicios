/* 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. */

let arr = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function testName (arrTest){
  let biggerNameInCaracter = 0;
  let biggerName = '';
  
  for (let index = 0; index < arrTest.length; index++){
    let caracteres = arrTest[index];
    if (caracteres.length > biggerNameInCaracter){
      biggerNameInCaracter = caracteres.length;
      biggerName = arrTest[index]
    }
  }
  return biggerName;
}

console.log(testName(arr))
 