const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601]
console.log("**************    step 1      *************");
arrayNumbers.forEach((Number,index) => {
    console.log(`index :${index},Element :${Number}`);
});

console.log("***************    step 2      ************");
arrayNumbers.forEach(element => {
  if (element>= 0) {
    console.log(`positive numbers are:${element}`);
  }
});
console.log("*************    step 3      **************");
let arrayOfNegativeNo=[];
arrayNumbers.forEach(element => {
    if (element< 0) {
       
        arrayOfNegativeNo.push(element);
    }
});
console.log(arrayOfNegativeNo);
console.log("**************   step 4       **************");

arrayNumbers.forEach(element => {
    if (element%2==0) {
        console.log(`Even numbers ${element}`);
    }
});
console.log("**************    step 5       **************");
let sum = 0
arrayNumbers.forEach(element => {
    sum = sum + element
});

console.log(`Sum of all elements is ${sum}`);
console.log("**************    step 6      ******************");

arrayNumbers.forEach((element,index) => {
    if (index%2==0) {
        console.log(`Even index numbers are:${element}`);
    }
});






