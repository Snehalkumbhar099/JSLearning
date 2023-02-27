console.log(`*********************    1    **************************`);
function voteEligibility(age) {
  if (age <= 0 || age > 120) {
    console.log(`invalid age: ${age} enter valid age`);
  } else {
    if (age >= 18) {
      console.log(`you are age is : ${age} you are eligible for voting`);
    } else {
      console.log(`you are age is : ${age} you are not eligible for voting`);
    }
  }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);


console.log(`*********************    2    **************************`);

function gradeCalculation(marks) {
  if (marks < 0 || marks > 100 ||(typeof marks != "number")) {
    console.log(`invalid marks :${marks},please enter valid marks `);
  }

  if (marks >= 90 && marks<=100) {
    console.log(`funtastic marks : ${marks} your grade is A+`);
  }
  if (marks >= 70 && marks < 90) {
    console.log(`Excellent marks : ${marks} your grade is A`);
  }
  if (marks >= 50 && marks < 70) {
    console.log(`Good marks : ${marks} your grade is B`);
  }
  if (marks >= 35 && marks < 50) {
    console.log(`marks is : ${marks} your grade is C Need Improvement`);
  }

  if (marks < 35 && marks >0) {
    console.log(`marks is : ${marks} your grade is Fail`);
  }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation(91);
gradeCalculation("Eighty");
gradeCalculation("NaN");
gradeCalculation();
