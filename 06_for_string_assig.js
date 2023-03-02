console.log("****************         Step1           ******************");


var vowels = function(str)
{
    var count = 0;
for (let index = 0; index <=  str.length-1; index++) {
    var char = str.charAt(index);
    if (char=="a"|| char =="o" || char =="e"|| char=="i"||char=="u"  ||char =="A"|| char =="O" || char =="E"|| char=="I"||char=="U") {
        
        count = count + 1;
    }
    
}

return count; 
}


 var result = vowels("JavaScript is the language Of Internet");
 console.log(`string - JavaScript is the language Of Internet have :" ${result}" number of vowels`);
 var result = vowels("I am Angular Developer");
 console.log(`string - I am Angular Developer :" ${result}" number of vowels`);
 var result = vowels("Hard work and commitment is the key of success");
 console.log(`string - Hard work and commitment is the key of success:" ${result}" number of vowels`);
 



 console.log("****************         Step2          ******************");


 function lastWordCharsCount(str) {
 var count = 0;
 for (let index = str.length-1; index >= 0; index--) {

    var char = str.charAt(index);
    if (char == " ") {
        break;
        
    }else{
        count = count + 1;
    }
    
    
 }
    return count;
 }
 var result = lastWordCharsCount("JavaScript is the language Of Internet");
 console.log(`Total number of character in the last word of string is : ${result}`);
 var result = lastWordCharsCount("I am Angular Developer");
 console.log(`Total number of character in the last word of string is: ${result}`);
 var result = lastWordCharsCount(" Hard work and commitment is the key of  success");
 console.log(`Total number of character in the last word of string is : ${result}`);

