function factorialOfNum(num) {
   
    if (null || (typeof num != "number"|| isNaN(num)||num==0 )) 
    {
        console.log(`${num}:invalid input, Enter valid input`);
    } 
    else {
        let factorial = 1;
        
            for (let index = num; index >=1; index--) 
            {
       
            factorial = factorial*index;
            }
            console.log(`factorial of number ${num} is : ${factorial}`);
           }
   
        
    
    
    
}
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum();
factorialOfNum(9);
factorialOfNum(0);
factorialOfNum(NaN);


