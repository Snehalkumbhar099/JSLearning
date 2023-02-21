function stringHandsOn()
 {
    var greet =("   Hey you are doing good, keep it up   ");
    console.log("**********       1          *********");
    console.log( "string print as it is:",greet);
    console.log("**********       2          *********");

    console.log( "Total length of the string is",greet.length);

    var greetAfterTrim = greet.trim();
    console.log("**********       3          *********");

    console.log("After remove the space:",greetAfterTrim,);
    
    var lenthOfString = greet.length - greetAfterTrim.length
    console.log("**********       4         *********");

    console.log("Totle number of extra spaces removed:",lenthOfString);
    console.log("**********       5         *********");

    console.log("First charcter after trim is:",greetAfterTrim.charAt(0), "last charcter after trim is:",greetAfterTrim.charAt(33));
    console.log("**********       6         *********");
    console.log("Total length of string after trim:",greetAfterTrim.length);
    console.log("**********       7        *********");
console.log("index of word good is:",greet.indexOf('g'));
console.log("**********       8          *********");

          var greetAfterSlice = greet.slice(22);
          console.log("string after using slice is:",greetAfterSlice);
          
          var greetAfterSubString = greet.substring(22);
          console.log("string after using substring :",greetAfterSubString);
          console.log("**********       9          *********");
          console.log("string is ends with word up:",greetAfterTrim.endsWith("up"));
          console.log("**********       10          *********");
          console.log("string is start with word Hey:",greetAfterTrim.startsWith("Hey"));

 }
 stringHandsOn()

