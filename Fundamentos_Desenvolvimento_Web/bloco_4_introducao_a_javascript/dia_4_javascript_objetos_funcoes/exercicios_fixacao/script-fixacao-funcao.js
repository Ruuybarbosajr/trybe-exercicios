function sumAddition (a,b){
  return a + b;
}

function sumSubtraction (a,b){
  return a - b;
}

function sumMultiplication (a,b){
  return a * b;
}

function sumDivision (a,b){
  return a / b;
}

function sumMddule (a,b){
  return a % b;
}

function biggerNUmber (a,b){
  if ( a > b){
    return a
  }else{
    return b
  }
}

function biggerNumberOfThree(a,b,c){
  if(a > b && c){
    return a;
  }else if(b > c && a){
    return b;
  }else{
    return c;
  }
}

function negativeOrPositive(number){
  if (number > 0){
    return 'positive'
  }else if( number < 0){
    return 'negative'
  }else{
    return 'zero'
  }
}

function triagulo (sideOne,sideTwo,sideThree){
  if ( sideOne > 0 && sideTwo > 0 && sideThree > 0){
    if(sideOne + sideTwo + sideThree == 180){
      return true
    }else{
      return false
    }
    }else{
      return 'valor menor que zero'
    }
}


console.log(triagulo(60,60,60))
