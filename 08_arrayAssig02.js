const arrayNumber =[20,31,40,25,23,11,29,9,60,2,11];
console.log(`*****************  1   **************************`);
console.log(`Total element available in the array is :${arrayNumber.length}`);
console.log(`*****************  2   **************************`);
console.log(`First element of array is : ${arrayNumber[0]}`);
console.log(`Last element of array is : ${arrayNumber[arrayNumber.length-1]}`);
console.log(`*****************  3  **************************`);
console.log(`Thirst last element of array is : ${arrayNumber[arrayNumber.length-3]}`);
{console.log(`*****************  4  **************************`);
    console.log(`Even number in the array are :`);
{ 

    const arrayOfEvenNumber =[]
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
   if (  (element % 2 == 0)) {
    arrayOfEvenNumber.push(element)
    
   } 
}
console.log(arrayOfEvenNumber);
}
console.log(`*****************  5   **************************`);
const arrayOfOddNumber =[]
   console.log(`ODD number in the array: `);
   for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
   if (  (element % 2 !== 0)) {
    arrayOfOddNumber.push(element)
   } 
   }
   console.log(arrayOfOddNumber);
}
console.log(`*****************  6   **************************`);
let sum =0;
for (let index = 0; index < arrayNumber.length; index=index+2) {
    const element = arrayNumber[index];
    sum = sum + element
    
    

    
}
console.log(`Sum of even Index number are : ${sum}`);
    
console.log(`*****************  7   **************************`);
let sumOfOdd =0;
for (let index = 1; index < arrayNumber.length; index=index+2) {
    const element = arrayNumber[index];
    sumOfOdd = sumOfOdd + element

    
}
console.log(`Sum of Odd Index number are : ${sumOfOdd}`);

console.log(`*****************  8   **************************`);
let sumOfAllElemenet =0;
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
    sumOfAllElemenet = sumOfAllElemenet + element

    
}
console.log(`Sum of all elements in the array are : ${sumOfAllElemenet}`);
{
    console.log(`*****************  9   **************************`);
    console.log(`*********Find multipale of 5 *************`);

const arrayOfMultipaleOf5 =[]
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
   if (  (element % 5 == 0)) {
    arrayOfMultipaleOf5.push(element);
    
   } 
}
console.log(arrayOfMultipaleOf5);
}

console.log(`*****************  10   **************************`);
console.log(`Is number 115 is available in the array :${arrayNumber.includes(115)}`);
console.log(`*****************  11   **************************`);

console.log(`Is number 23 is available in the array :${arrayNumber.includes(23)}`);

console.log(`*****************  12   **************************`);
arrayNumber.splice(3,0,55,66);
console.log(arrayNumber);
console.log(`*****************  13   **************************`);
arrayNumber.splice(4,3);
console.log(arrayNumber);



    

    
