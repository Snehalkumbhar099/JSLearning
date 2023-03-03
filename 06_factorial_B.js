function factorialWordsCount(str) {
    if (typeof str != "string" || str =="") 
    {
        console.log(`"${str} ":invalid input, Enter valid input`);
    } 
   else {
    let count = str.split(" ");
    let wordCount = count.length;
    //   console.log(wordCount);

    let factorial = 1;

    for (let index = wordCount; index >= 1; index--) {
      factorial = factorial * index;
    }
    console.log(`Total number of word in the string is ${wordCount} - And its factorial is : ${factorial}`);
  }
}
factorialWordsCount("Revision is the mother of Success");
factorialWordsCount(NaN);
factorialWordsCount("We never fail, we always learn");
factorialWordsCount("");
factorialWordsCount(null);
factorialWordsCount();
