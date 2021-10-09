/* Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido. */

let grossSalary = 5600;
let descountedInssSalaty;
let descountedIr;
let descountedInss;
let netSalary;

// aliquot do INSS
const aliquotInssEight = 0.08;
const aliquotInssNine = 0.09;
const aliquotInssEleven = 0.11; 
const aliquotInssMax = 570.88;
// aliquot do IR
const aliquotIrSevenHalf = 0.075;
const aliquotIrFifteen = 0.15;
const aliquotIrTwentyTwoHalf = 0.225;
const aliquotIrTwentySevenHalf = 0.275;

if ( grossSalary <= 1556.94 ){
  descountedInss = grossSalary * aliquotInssEight;
}else if ( grossSalary >= 1556.95 && grossSalary <= 2594.92 ){
  descountedInss = grossSalary * aliquotInssNine;
}else if ( grossSalary >= 2594.93 && grossSalary <= 5189.82){
  descountedInss = grossSalary * aliquotInssEleven;
}else{
  descountedInss = aliquotInssMax;
}

descountedInssSalaty = grossSalary - descountedInss;

if ( descountedInssSalaty <= 1903.98 ){
  console.log('Isento de imposto de renda')
}else if ( descountedInssSalaty >= 1903.99 && descountedInssSalaty <= 2826.65){
  descountedIr = (descountedInssSalaty * aliquotIrSevenHalf) - 142.80;
}else if ( descountedInssSalaty >= 2826.66 && descountedInssSalaty <= 3751.05){
  descountedIr = (descountedInssSalaty * aliquotIrFifteen) - 354.80;
}else if ( descountedInssSalaty >= 3751.06 && descountedInssSalaty <= 4664.68){
  descountedIr = (descountedInssSalaty * aliquotIrTwentyTwoHalf) - 636.13;
}else{
  descountedIr = (descountedInssSalaty * aliquotIrTwentySevenHalf)- 869.36;
}

netSalary = descountedInssSalaty - descountedIr;

console.log(netSalary.toFixed(2))

