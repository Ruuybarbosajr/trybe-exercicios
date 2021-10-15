let base = 5;
let space = '';
let asterisco = '*';
let vezes = base;

for (let index = 1; index <= base; index++){ 
  for (let secondIndex = 1; secondIndex <= base; secondIndex++){
    if(secondIndex > vezes){
      space+= asterisco;
    }else{
      space+=' ';
    }
  }
  console.log(space)
  vezes++
}
    
    