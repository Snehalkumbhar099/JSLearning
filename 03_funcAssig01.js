console.log("*****************************fucation with no arguments and no return********************");
function showaname()
{
console.log("My Name is : snehal");
}
showaname();
function showage() 
    {
    console.log("My age is : 25");
    }
    showage();
    console.log("*************************    2            ****************");

    function personalDetails(firstName,lastName,collegeName)
    {
    console.log("first Name is :snehal,","last Name is :kumbhar ," ,"college Name is : PVPIT")
    }
    personalDetails()

console.log("********************************fucation with arguments and no return*********************");

function swapValuesDude(value1,value2)
{
    console.log("-----------------Before Swap------------------");
    console.log(value1,value2);
    console.log("------------------After Swap-------------------");
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log(value1,value2);
}
swapValuesDude("virat","anushka");
swapValuesDude("1000","2000");


console.log("****************Function with argument and ruturn***************");
function addThreeValues(value1,value2,value3)
{
    var sum = value1+value2+value3;
    return sum;
}

    var sumResult = addThreeValues(10.23,600,40)
    console.log(sumResult);

    var sumResult = addThreeValues("Hello  ","Good  ","Morning")
    console.log(sumResult);