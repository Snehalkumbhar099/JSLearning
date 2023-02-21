var greet = "Good Morning";
console.log(typeof greet);
console.log(" Total number chars available into this string variable - greet ");
var greetLength = greet.length;
console.log(greetLength);

var charIndex3 = greet.charAt(3);
console.log("character available at index 3:", charIndex3);

var charAtLastIndex = greet.charAt(greetLength - 1);
console.log("last char is:", charAtLastIndex);

var indexOfM = greet.indexOf("o");
console.log("M index is :", indexOfM);

console.log("Index of o char: ", greet.indexOf("o"));
console.log("Index of o char using lastIndexOf(): ", greet.lastIndexOf("o"));

var replaceResult = greet.replace("Morning", "Evening");
console.log(replaceResult);
console.log(greet);

console.log("Upper Case:", replaceResult.toUpperCase());
console.log("Upper Case:", replaceResult.toLowerCase());
var myName = " Mohit Sharma ";
var myNameAfterTrim = myName.trim();
console.log("Removing extra start and end spaces using trim(): ", myNameAfterTrim, myName.length,myNameAfterTrim.length);
var count = myName.length -myNameAfterTrim.length
console.log("totale number of space:",count);
