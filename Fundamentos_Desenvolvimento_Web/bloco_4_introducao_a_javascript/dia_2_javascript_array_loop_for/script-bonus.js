

// ordem crescente - 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index++){
  for (let secondIndex = 0; secondIndex < index; secondIndex++){
    if( numbers[index] < numbers[secondIndex]){
      let newPosition = numbers[index];
      numbers[index] = numbers[secondIndex]
      numbers[secondIndex] = newPosition;
    }
  }
}
console.log(numbers)



// ordem decrescente  - 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index++){
  for (let secondIndex = 0; secondIndex < index; secondIndex++){
    if( numbers[index] > numbers[secondIndex]){
      let newPosition = numbers[index];
      numbers[index] = numbers[secondIndex]
      numbers[secondIndex] = newPosition;
    }
  }
}
console.log(numbers)

// 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArr = []; 

for (let index = 0; index < numbers.length; index++){
  if (index < numbers.length - 1){
    newArr.push(numbers[index] * numbers[index + 1]);
  }else{
    newArr.push(numbers[index] * 2);
  }
}
console.log(newArr)