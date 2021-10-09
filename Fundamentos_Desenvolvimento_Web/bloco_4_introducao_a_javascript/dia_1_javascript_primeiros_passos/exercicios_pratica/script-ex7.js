/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras */

let score = 100;

if ( score > 100 ){
  console.log('erro')
}else if ( score >= 90){
  console.log('A')
}else if ( score >= 80 ){
  console.log('B')
}else if ( score >= 70 ){
  console.log('C')
}else if ( score >= 60 ){
  console.log('D')
}else if ( score >= 50){
  console.log('E')
}else if ( score >= 0 && score < 50){
  console.log('F')
}else{
  console.log('erro')
}
