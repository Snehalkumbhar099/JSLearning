class Employee{
    constructor (emp_id,emp_name,emp_dept,emp_salary,emp_company)
    {
        this.emp_id = emp_id;
        this.emp_name =emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company = emp_company;
        

    }
}
const emp_anil = new Employee (22,"Anil","IT",50000,"TCS");
const emp_radha = new Employee (33,"Radha","HR",74000,"Wipro");
const emp_rishi = new Employee (55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee (66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee (77,"Monika","IT",40000,"Wipro");
const emp_viny = new Employee (88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee (99,"Mahesh","HR",85000,"Infy");

const array_empoyess= [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]


console.log(`**********************************   step 1      ***************************************`);
array_empoyess.forEach(employee => {
    if (employee.emp_company =="TCS") {
        console.log(`Name :${employee.emp_name} , company Name : ${employee.emp_company} `);
    }
});

console.log(`***********************************    step 2     ***************************************`);
array_empoyess.forEach(element => {
    if (element.emp_salary >=50000) {
        console.log(`employee ID ${element.emp_id} , employee name : ${element.emp_name} , department: ${element.emp_dept}, salary: ${element.emp_salary} ,company name :${element.emp_company}`);
    }
});
console.log(`************************************   step 3     *****************************************`);
let sum =0
array_empoyess.forEach(element => {
   sum = sum + element.emp_salary
});
console.log(`Sum of all employee salary is :${sum}`);


let sumof =0
let avarage
array_empoyess.forEach((element,index) => {
   sumof= sumof + element.emp_salary
   avarage = sumof/(index+1)
   
});
console.log(`***********************************   step 4    *****************************************`);
console.log(`Avarage of salary is: ${avarage}`);

console.log(`**************************************    step 5    ******************************************`);


array_empoyess.forEach(element => {
    if ((element.emp_dept=="IT" || element.emp_dept=="HR") && element.emp_salary >= 75000) {
        console.log(`employee ID ${element.emp_id} , employee name : ${element.emp_name} , department: ${element.emp_dept}, salary: ${element.emp_salary} ,company name :${element.emp_company}`);
    }
});










