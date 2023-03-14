const arrayNums =[20,3,4,56,90,400,49];
const newarraynums = arrayNums;
newarraynums.push(55,66);

console.log(`--------------------------   shallow clone             -----------------------`);
console.log(`Orignal Array ==> ${arrayNums}`);
console.log(`clone Array  (add 55,66) ==> ${newarraynums}`);

console.log(`--------------------------   deep clone             -----------------------`);

const deeparray = [...arrayNums]
arrayNums.push(10,25);
console.log(`Orignal Array(add 10,25) ==> ${arrayNums}`);
console.log(`clone Array   ==> ${deeparray}`);
console.log(`--------------------------     Marge Array        -----------------------`);

const arrayEven =[2,30,14,8];
const margeArray = [...arrayNums,...arrayEven]
console.log(`Marge Array   ==> ${margeArray}`);



const employee_info ={
    emp_id : 27,
    emp_name : "john Doe",
    salary :{
        july_month : "40,0000INR",
        aug_month : "50,0000INR",
        jun_month : "65,0000INR",
    },
    address :{
        locality : {
            colony:"OM Vrindavan Society",
            street : "Kanch Pokli,431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles :["+91- 8600 3456 88 ","1800- 4567 32  ","+91- 9096 5678 77"]

}
console.log(`--------------------------     step5        -----------------------`);
console.log(`Addrees :colony- ${employee_info.address.locality.colony}, street-${employee_info.address.locality.street}  City-${employee_info.address.city}, state-${employee_info.address.state}, Country-${employee_info.address.country}`);
console.log(`Mobile numbers : ${employee_info.mobiles}`);
const newEmployeeInfo = JSON.parse(JSON.stringify(employee_info));
console.log(`--------------------------     step6        -----------------------`);
newEmployeeInfo.salary.july_month = "80,000INR";
console.log(`--------------------------     a       -----------------------`);
console.log(` july month : ${employee_info.salary.july_month}`);
console.log(` july month Updated salary: ${newEmployeeInfo.salary.july_month}`);
employee_info.address.country ="United Kingdom"
console.log(`--------------------------     b        -----------------------`);
console.log(`country name : ${newEmployeeInfo.address.country}`);
console.log(`country name updated:  ${employee_info.address.country}`);






