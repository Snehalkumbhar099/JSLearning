const sbiBank = {
bankName : "State bank of india",
location :"pune",
accountNo : "1450045126",
ifsc :"SBI0012",
interestRate : "10.2%",
showDetails : function(){
    console.log(`Bank Name:${sbiBank.bankName},location:${sbiBank.location},account No :${sbiBank.accountNo},IFSC code: ${sbiBank.ifsc},interest Rate :${sbiBank.interestRate}`);
}

}
sbiBank.showDetails();




const axisBank = {
    bankName : "Axis bank",
    location :"Nashik",
    accountNo : "144568323",
    ifsc :"AXIS450012",
    interestRate : "10%",

    showDetails : function(){
        console.log(`Bank Name:${axisBank.bankName},location:${axisBank.location},account No :${axisBank.accountNo},IFSC code: ${axisBank.ifsc},interest Rate :${sbiBank.interestRate}`);
    }
    }
    axisBank.showDetails()


    const hdfcBank = {
        bankName : "HDFC bank",
        location :"mumbai",
        accountNo : "325568323",
        ifsc :"HDFC450012",
        interestRate : "9.8%",
        showDetails : function(){
            console.log(`Bank Name:${hdfcBank.bankName},location:${hdfcBank.location},account No :${hdfcBank.accountNo},IFSC code: ${hdfcBank.ifsc},interest Rate :${sbiBank.interestRate}`);
        }
        }
        hdfcBank.showDetails();

        const yesBank = {
            bankName : "Yes bank",
            location :"Nagpur",
            accountNo : "984568323",
            ifsc :"YES450012",
            interestRate : "8.9%",
            showDetails : function(){
                console.log(`Bank Name:${yesBank.bankName},location:${yesBank.location},account No :${yesBank.accountNo},IFSC code: ${yesBank.ifsc},interest Rate :${yesBank.interestRate}`);
            }
            }
            yesBank.showDetails();