const professor = {
   Name : "snehal",
   lastName: "kumbhar",
   clgId :"412",
   phoneNumber:9850691545,
   age:26,
   degrees:{
    engineering :"CSC",
    PHD:"Adv computing"
   },
   certificates:["Hacker Rankparticipation","Certificate in IFE course","Certificate in Adv Programing"],
   totaleDegrees:function (){
    return `teacher degrees are : engineering  in ${this.degrees.engineering}& PHD in ${this.degrees.PHD}`
   }
   
   

}
console.log(`-------------------------------------    properties added    ------------------------------------------------`);
console.log(professor);
console.log(`-------------------------------------    nested object degrees    ------------------------------------------------`);
console.log(professor.degrees);
console.log(`-------------------------------------    Added array certificates    ------------------------------------------------`);
console.log(professor.certificates);
console.log(`-------------------------------------    function as a value return as string   ------------------------------------------------`);
let  result = professor.totaleDegrees()
console.log(result);
console.log(`-------------------------------------    new property     ------------------------------------------------`);
professor.totaleExperience ="14 years";
console.log(`professor Totale Experience is: ${professor.totaleExperience}`);
console.log(`-------------------------------------    modify existing property    ------------------------------------------------`);

console.log(`professor ID is ${professor.clgId}`);
professor.clgId ="5412";
console.log(`professor ID is ${professor.clgId}`);
console.log(`-------------------------------------    add new certificate   ------------------------------------------------`);

professor.certificates.push("Oracle Certified")
console.log(professor.certificates);
console.log(`-------------------------------------    last element of the array    ------------------------------------------------`);

console.log(`last element of certificates array is :${professor.certificates[professor.certificates.length-1]}`);
   
