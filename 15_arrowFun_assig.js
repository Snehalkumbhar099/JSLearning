
console.log(`*****************************    STEP 1     ************************************`);
let arrow =() =>console.log(`Good Morning , Today is Monday `);
arrow();

console.log(`*****************************    STEP 2     ************************************`);

let multiplication = (num1,num2,num3 = 1) =>{
    const mult =num1*num2*num3;
console.log(`multiplication of ${num1}*${num2}*${num3} = ${mult}`);
}
multiplication(5,5,2);
multiplication(10,4);
console.log(`*****************************    STEP 3(a)    ************************************`);

let add =(num1,num2,num3,num4,num5)=>{
const addition =num1+num2+num3+num4+num5;
return addition;
}

let addd = add(100,100,200,349,756);
console.log(`additon is = ${addd}`);
let addi = add("I am ","lerning ","ES6 ","features ","in depth")
console.log(`*****************************    STEP 3(c)    ************************************`);

console.log(`concatenation  is :  ${addi}`);




