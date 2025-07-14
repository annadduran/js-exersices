//Get the current day
today = new Date();

//create a date object fro christmas of the current year
var cmas = new Date(today.getFullYear(), 11, 25);

//check if the current date is after december 25th
if (today.getMonth() == 11 && today.getDate() > 25) {
    //if true , set christmas for the next year 
    cmas.setFullYear(cmas.getFullYear() + 1);
}

//calculate the difference in days between today and christmas
var one_day = 1000 * 60 * 60 * 24;

//Log the number of days left until christmas
console.log(Math.ceil((cmas.getTime() - today.getTime()) / (one_day)) +
    " days left until christmas");