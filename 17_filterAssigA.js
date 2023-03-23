const arrayNumbers =[20,11,40,25,37,49,9,90,60,2,19];
console.log(`**********  numbers are greter then 50 ************`);
const newArray=arrayNumbers.filter(element=>element>50)
console.log(newArray);
console.log(`********** Even  numbers  ************`);
const evenArray =arrayNumbers.filter(element=>element%2==0)
console.log(evenArray);
console.log(`**********  Odd  numbers  ************`);
const oddArray = arrayNumbers.filter(element=> element%2==!0)
console.log(oddArray);
console.log(`**********  numbers are multiple of 5  ************`);
const mulArray=arrayNumbers.filter(element=>element%5==0)
console.log(mulArray);
console.log(`**********  numbers  between 20 and 50 ************`);
const betArray = arrayNumbers.filter(element=>element>20&&element<50)
console.log(betArray);