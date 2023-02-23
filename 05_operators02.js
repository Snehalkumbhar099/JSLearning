console.log("***************************  1     ********************************");
function maleMarriageEligibility(gender, age, boyName) {
  var result =
    gender == "Male" && age >= 21
      ? `Hey ${boyName} you are eligible for marriage`
      : `Hey ${boyName} you are not eligible for marriage`;
  return result;
}
var result = maleMarriageEligibility("Male", 25, "Billgates");
console.log(result);
var result = maleMarriageEligibility("Male", 17, "Stew jobs");
console.log(result);
console.log("***************************  2     ********************************");


function femaleMarriageEligibility(gender, age, girlName) {
  var result =
    gender == "female" && age >= 18
      ? `Hey ${girlName} you are eligible for marriage`
      : `Hey ${girlName} you are not eligible for marriage`;
  return result;
  
}
var result = femaleMarriageEligibility("female",16,"jenifer");
console.log(result);
var result = femaleMarriageEligibility("female",27,"malinda gates");
console.log(result);