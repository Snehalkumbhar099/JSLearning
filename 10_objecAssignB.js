const bankSbi ={
    bankName : "State bank of india",
accountNo : "1450045126",
ifsc :"SBI0012",
branchCode : "002"
}


const bankLocation = {
    street : "nashik road",
    city : "nashik",
    pinCode : "412115"

}
console.log(`-------------------------------------      clone objects using object.assign()         ------------------------------------------`);
const newBank = bankSbi;
console.log(`bank  name :${newBank.bankName}, account no :${newBank.accountNo}, Ifsc code :${newBank.ifsc}, branch Code :${newBank.branchCode}`);
const  newBankLocation = bankLocation;
console.log(`street :${newBankLocation.street}, City : ${newBankLocation.city}, PinCode : ${newBankLocation.pinCode}`);
const deepCloneBank ={...bankSbi};
console.log(`-------------------------------------      clone objects using spread Operator         ------------------------------------------`);
console.log(`bank  name :${deepCloneBank.bankName}, account no :${deepCloneBank.accountNo}, Ifsc code :${deepCloneBank.ifsc}, branch Code :${deepCloneBank.branchCode}`);
const deepClonenewBankLocation ={...bankLocation}
console.log(`street :${deepClonenewBankLocation .street}, City : ${deepClonenewBankLocation .city}, PinCode : ${deepClonenewBankLocation .pinCode}`);

const rateOfInterest ={
    homeLoanInterest: "8.2",
    personalLoanInterest : "10.5",
    dueInterest : "14.2"
}

console.log(`-------------------------------------      Merge 1,2,3 object         ------------------------------------------`);

const sbiDetails ={...bankSbi,...bankLocation,...rateOfInterest};
console.table(sbiDetails);
console.log(`----------------------   traverseObject    -----------------------`);

function traverseObject(sbiDetails)
{
    for (const key in sbiDetails) {
        if (Object.hasOwnProperty.call(sbiDetails, key)) {
            const element = sbiDetails[key];
            console.log(`${key}:${element}`);
            
        }
    }
}
traverseObject(sbiDetails);








