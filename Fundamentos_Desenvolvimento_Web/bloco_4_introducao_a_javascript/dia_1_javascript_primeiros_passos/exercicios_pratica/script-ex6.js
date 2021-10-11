/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
 */

let piece = 'peao'

switch (piece.toLowerCase()){
  
  case 'rainha':
    console.log('A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.')
    break;
  case 'rei': 
    console.log('O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez')
    break;
  case 'bispo':
    console.log('O bispo move-se ao longo da diagonal. Não pode pular outras peças.')
    break;
  case 'cavalo':
    console.log('É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.')
    break;
  case 'torre':
    console.log(' torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.')
    break;
  case 'peao':
    console.log('O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo')
    break;
  default:
    console.log('erro')
    break;
}
