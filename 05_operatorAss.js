var java = "javaScript";
var gChrome = "google chrome";
var devsamrt ="devloper smart";
 function squareOfWordLength(value) {
    console.log(`given string is :${value}`);
    console.log(`length of string is: ${value.length}`);
    console.log(`the squre of the string is: ${value.length*value.length}`);
    console.log(`***********************************************************`);
    
 }
  squareOfWordLength(java);
  squareOfWordLength(gChrome);
  squareOfWordLength(devsamrt);

  function angularD() {
var angular ="I am angular developer";
var angulength =angular.length;
var splitStatement = angular.split(" ");
var wordCount = splitStatement.length;
console.log(`the given string is  :${angular} ,and its length is  : ${angular.length}`);
console.log(`total number of words in the given string is : ${wordCount}`);
console.log(`string length divide by total number of words : ${angulength/wordCount}`);
console.log(`string length multiplyied by total number of words : ${angulength*wordCount}`);

 }
 angularD();