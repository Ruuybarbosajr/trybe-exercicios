/* Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

Atente que, sobre o custo do produto, incide um imposto de 20%.

Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo. */

const productCost = 15; // valor de custo do produto;
const saleValue = 50; // valor de venda do produto;

let tax = 0.2; // imposto de 20%;
let valueTotalProduct; // variável que vai receber o valor total do produto com imposto
let profit; // variável que vai recever o lucro do produto. ( valor total com importo - valor de venda)

if ( productCost < 0 || saleValue < 0 ){   
  console.log('erro')
} // blocod e verificação se algum valor é menor que zero;

valueTotalProduct = (productCost * tax) + productCost; // Após verificado, valor de custo do produto com imposto;
profit = saleValue - valueTotalProduct; // lucro do produto;

console.log(profit * 1000) // mostra em tela o valor do lucro se vender 1000;