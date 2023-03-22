const arrayNumbers =[20,11,40,25,23,11,9,31,60,2,19];

console.log(`**********  Add 10 into each element  ************`);

const newArray=arrayNumbers.map((element) => {
    return element + 10;
});
console.log(newArray);

console.log(`**********  Square each element  ************`);
const newSquareArray=arrayNumbers.map((element) => {
    return element *element;
});
console.log(newSquareArray);
console.log(`**********  Add index value into each element  ************`);
const newAddArray=arrayNumbers.map((element,index) => {
    return element + index;
});
console.log(newAddArray);