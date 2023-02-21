function  stringBasics() 
{
    console.log("**********       1          *********");
    var greet = "My dream company is  Google" 
    console.log(greet);
    console.log("**********       2         *********");
    
    var hobby1 ="playing chess"
    var hobby2 ="skeching"
    var hobby3 ="cooking"
    console.log("**********       2.1          *********");
     console.log("My hobbies are :","1-",hobby1,",2-",hobby2,",3-",hobby3);
     console.log("**********       2.2          *********");

// console.log("Total no of char in hobby1:",hobby1.length);
// console.log("Total no of char in hobby2:",hobby2.length);
// console.log("Total no of char in hobby3:",hobby3.length);

var sumOfChar = hobby1.length + hobby2.length +hobby3.length;
console.log("Sum of char in hobby1,hobby2,hobby3 is :",sumOfChar);

}
 stringBasics();