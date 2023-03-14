const bank = function(bankName,location,ifscCode,branchCode )
    {
     this.bankName=bankName;
     this.location=location;
     this.ifscCode=ifscCode;
     this.branchCode=branchCode;
     console.log(`Bank Name:${bankName},location:${location},IFSC code: ${ifscCode} ,branch code: ${branchCode}`);


}

const yes = new bank("YES bank","mumbai","YES450012","YES0015");
const sbi =new bank("State bank of india","pune","SBI0012","SBI0012");
const mha = new bank("maharastra bank","pune","MHA0001254","MHA00002");
const axis = new bank("Axis bank","Nashik","AXIS450012","AXIS00021");
console.log(`********************************************************************************************`);


 
bank.prototype.openTime = "9 AM IST";
bank.prototype.closeTime = "6 PM IST";
console.log(`SBI Bank : open time :${sbi.openTime} and close time : ${sbi.closeTime}`);
console.log(`AXIS Bank : open time :${axis.openTime} and close time : ${axis.closeTime}`);
console.log(`*******************************************************************************************`);

console.log(`Bank name ${yes.bankName} Branch Code is ${yes.branchCode } and its open time is ${yes.openTime}`);



