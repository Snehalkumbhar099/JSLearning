
console.log(`*******************  1    *****************`);
function greaterNumber(num1,num2) {
var result = num1 >num2 ? num1 : num2

    console.log(`greater number is: ${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log(`*******************  2   *****************`);

function isOddOrEvenNum(num) {
    var result = num % 2==0 ? true :false
    console.log(`is number ${num} is even : ${result}`);
}
isOddOrEvenNum(29);
isOddOrEvenNum(44);
isOddOrEvenNum(0);
isOddOrEvenNum(101);

console.log(`*******************  3   *****************`);
function wordLength(word) {
    var wordLen = word.length
    var lengthOf = wordLen %2 ==0 ? "Even": "Odd"
    console.log(`is word ${word} length ${wordLen} is even : ${lengthOf}`);
}
wordLength("javaScript");
wordLength("developer");
wordLength("google");
