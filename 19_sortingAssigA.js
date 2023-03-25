const arrayRollNumbers =[113,45,56,11,32,45,109,799,56,45];

console.log(`****************************    Reverseing the Array     *****************************`);
const reverseArray=arrayRollNumbers.reverse();
console.log(reverseArray);
console.log(`****************************    sorting the Array (without custom logic)   *****************************`);
const sortArray=arrayRollNumbers.sort();
console.log(sortArray);
console.log(`****************************    Sorting  the Array     *****************************`);
const sortedArray = arrayRollNumbers.sort((a,b)=>
{
   return a>b ? 1:-1

})

console.log(sortedArray);

console.log(`****************************    Greatest number in the Array       *****************************`);
console.log(sortArray[sortArray.length-1]);
console.log(`****************************    smallest number in the Array       *****************************`);
console.log(sortArray[0]);
console.log(`****************************   removing Duplicates numbers in  the Array    *****************************`);
const setOFArray=[... new Set(sortArray)];
console.log(setOFArray);

