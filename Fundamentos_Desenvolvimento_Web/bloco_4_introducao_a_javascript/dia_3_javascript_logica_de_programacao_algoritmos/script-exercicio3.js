let number = 5;
let asterisco = '';
let space = '';
let timer = number;


if (number > 1){
  for (let index = 0; index < number; index++){
    for (let secondIndex = 0; secondIndex <= number; secondIndex++){
      if ( secondIndex < timer){
        space += ' ';
      }else{
        space += '*'
      }
    }
    console.log(space)
    space = '';
    timer--
  }
}else{
  console.log('Valor menor que 1')
}