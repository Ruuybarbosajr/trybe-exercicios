let number = 5;
let asterisco = '';

if( number > 1){
  console.log(`n = ${number}`)
  for (let index = 1; index <= number; index++){
    for (secondIndex = 1; secondIndex <= number; secondIndex++){
      asterisco += '*'
    }
    console.log('\n',asterisco)
    asterisco = '';
  }
}else{
  console.log('valor menor que 1')
}