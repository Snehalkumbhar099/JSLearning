function monthOfYear(monthnumber) {
  switch (monthnumber) {
    case 1:
      console.log(`month of the year is ${monthnumber}:january`);

      break;
    case 2:
      console.log(`month of the year is ${monthnumber}:February`);

      break;
    case 3:
      console.log(`month of the year is ${monthnumber}:March`);

      break;
    case 4:
      console.log(`month of the year is ${monthnumber}:April`);

      break;
    case 5:
      console.log(`month of the year is ${monthnumber}:May`);

      break;
    case 6:
      console.log(`month of the year is ${monthnumber}:June`);

      break;
    case 7:
      console.log(`month of the year is ${monthnumber}:July`);

      break;
    case 8:
      console.log(`month of the year is ${monthnumber}:August`);

      break;
    case 9:
      console.log(`month of the year is ${monthnumber}:September`);

      break;
    case 10:
      console.log(`month of the year is ${monthnumber}:October`);

      break;
    case 11:
      console.log(`month of the year is ${monthnumber}:November`);

      break;
    case 12:
      console.log(`month of the year is ${monthnumber}:December`);

      break;

    default:
      console.log(`Enter valid input, ${monthnumber} is not valid input`);
      break;
  }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
