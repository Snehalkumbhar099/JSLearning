console.log(`*********************        step1      *****************************`);
class Vehicle{
constructor(carName,company,color,price,engine){
    this.carName = carName;
    this.company = company;
    this.color = color;
    this.price = price;
    this.engine = engine;
}
}


const nexon= new Vehicle("Nexon","Tata","Black","1500000","Diesel");
console.log(nexon);
const grand = new Vehicle("Grand i10 nios" ,"Hyundai","Aquamarin","800000","CNG");
console.log(grand);
const ertiga =new Vehicle( "Ertiga","Maruti Suzuki","White","1100000","CNG");
console.log(ertiga);
const indica = new Vehicle( "Indica" ,"Tata","white","400000","Diesel");
console.log(indica);
const alto = new Vehicle ("Alto","Maruti Suzuki","Red","350000","CNG");
console.log(alto);

console.log(`---------------------------------     Traverse Array       ------------------------------------------`);
const arrayOfVehicle = [nexon,grand,ertiga,indica,alto];
for (const element of arrayOfVehicle) {
    console.log(` Details of vehicle : ${element.carName},${element.company},${element.color},${element.price},${element.engine}`);
    
}
console.log(`**********************************   step2             ************************************`);

class College {
    constructor(collegeName,city,university,department){
        this.collegeName = collegeName;
        this.city =city;
        this.university = university;
        this.department = department;
        

    }
}
const pvpit = new College(" PVPIT","Pune","Pune University","computer science");
console.log(pvpit);
const bharti = new College("BVPCOE","mumbai","Mumbai University","mechanical");
console.log(bharti);
const coep = new College("COEP","Aurangabad","BAMU","ENTC");
console.log(coep);
const vit = new College("VIT","Pune","Pune University","Civil");
console.log(vit);

console.log(`********************     step3     ******************`);

function traverseObject(collegeName)
{
    for (const key in collegeName) {
        if (Object.hasOwnProperty.call(collegeName, key)) {
            const element = collegeName[key];
            console.log(`${key}:${element}`);
            
        }
    }
}

traverseObject(pvpit);
console.log(`--------------------------------------------------------------------------`);
traverseObject(bharti)
console.log(`--------------------------------------------------------------------------`);
traverseObject(coep)
console.log(`--------------------------------------------------------------------------`);
traverseObject(vit)