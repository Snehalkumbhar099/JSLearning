var show = function check_leap_year(leap_year) {
if (null || (typeof leap_year != "number"|| isNaN(leap_year))) {
    console.log(`${leap_year}:invalid input`);
} else {
    

    
    if ((leap_year %4==0)) {
        console.log(`This ${leap_year} year is leap year`);
        
    } else {
        console.log(`This ${leap_year} year is not leap year`);
        
    }
}
}
        show(2020);
        show(1996);
        show(1600);
        show(2022);
        show(1945);
        show(null);
        show("Twenty Twenty");
        show();
        show(NaN);
        show(1750);