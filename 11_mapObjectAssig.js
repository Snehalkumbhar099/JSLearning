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

    console.log(`*******************************         Object created with data Members         ******************************************`);
    console.log(axis_bank);
    console.log(sbi_bank);
    console.log(icici_bank);
    console.log(kotak_bank);
    console.log(hdfc_bank);
    console.log(punjab_bank);
    console.log(axis_bank);
  const mapOfBanks = new Map();
  mapOfBanks.set("45645641215",axis_bank);
  mapOfBanks.set("25251515454",sbi_bank);
  mapOfBanks.set("1212123232",icici_bank);
  
  mapOfBanks.set("41211541211",kotak_bank);
  mapOfBanks.set("12345678912",hdfc_bank);
  mapOfBanks.set("1122233445",punjab_bank);
  console.log(`*******************************        All Object Element in Map                      ******************************************`);
  console.log(mapOfBanks);
  console.log(`*******************************        Traverse Map        ******************************************`);
  const element = mapOfBanks.get("YES_33") 
  const keyOfMap = mapOfBanks.keys(); 
  for (const key of keyOfMap) 
  { const element = mapOfBanks.get(key) 
    console.log(`Bank name : ${element.bankName}  , Account number : ${element.account}, Interest Rate : ${element.interestRate}`);

}