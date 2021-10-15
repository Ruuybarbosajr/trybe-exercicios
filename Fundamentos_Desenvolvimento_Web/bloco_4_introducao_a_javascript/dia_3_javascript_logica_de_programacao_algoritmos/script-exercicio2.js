let number = 5;
let asterisco = '';

if ( number > 1){
console.log(`n = ${number}`)
for (let index = 0; index < number; index++){
  for (let secondIndex = index + 1; secondIndex <= index + 1; secondIndex++){
    asterisco += '*';
  }
  console.log(asterisco)
}
}else{
  console.log('valor menor que 1')
}