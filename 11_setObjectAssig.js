class Bank {
  constructor(bankName, location, account, ifsc, interestRate) {
    this.bankName = bankName;
    this.location = location;
    this.account = account;
    this.ifsc = ifsc;
    this.interestRate = interestRate;
  }
}
const axis_bank = new Bank(
    "Axis Bank",
    "Pune",
    "45645641215",
    "AXIS000563",
    9.5
  );
const sbi_bank = new Bank(
  "SBI Bank",
  "Wakad",
  "25251515454",
  "SBIN000458",
  8.75
);
const icici_bank = new Bank(
    "ICICI Bank",
    "Karad",
    "1212123232",
    "ICICI000656565",
    9.0
  );

const kotak_bank = new Bank(
  "Kotak Bank",
  "Satara",
  "41211541211",
  "KOTAK00046698",
  11.75
);
const hdfc_bank = new Bank(
  "HDFC Bank",
  "Mumbai", 
  "12345678912",
  "HDFC0008989",
  10.75
);

  const punjab_bank = new Bank(
    "PANJAB Bank",
    "Marunji",
    "1122233445",
    "PUNJAB0005252",
    8.0
  );
  console.log(`*******************************         Object created with data Members             *****************************************`);
  console.log(axis_bank);
  console.log(sbi_bank);
  console.log(icici_bank);
  console.log(kotak_bank);
  console.log(hdfc_bank);
  console.log(punjab_bank);
  
const setOfBanks = new Set();
setOfBanks.add(axis_bank);
setOfBanks.add(sbi_bank);
setOfBanks.add(icici_bank);
setOfBanks.add(kotak_bank);
setOfBanks.add(hdfc_bank);
setOfBanks.add(punjab_bank);
console.log(`*******************************        All Object Element in Set                     ******************************************`);
console.log(setOfBanks);
console.log(`*******************************        Traverse SET        ******************************************`);
for (const bank of setOfBanks) {
  console.log(`bank name : ${bank.bankName} , Location : ${bank.location}`);
}
