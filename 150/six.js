//Define a function to check if a gieven year is leap year 
function leapyear(year){
    //return true if the year is divisible by 4 but no divisible by 100 unless it's also divisible by 400
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

//test 
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));