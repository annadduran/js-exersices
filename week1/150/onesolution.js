// current date and time
var today = new Date();

//day of the week 
var day = today.getDay();

//Array of dar names 
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//Display 
console.log("Today is: " + daylist[day] + ".");

//current hout, minute and second
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

//AM or PM
var prepand = (hour >= 12) ? " PM " : " AM ";

//convert to 24 hr to 12 hr format
hour = (hour >= 12) ? hour - 12: hour;

//check for cases when hour is 0
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon ';
        
    }else {
        hour = 12;
        prepand = ' PM ';
    }
}

if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight ';
        
    }else {
        hour = 12;
        prepand = ' AM ';
    }
}

//Display current time 
console.log("CURRENT TIME: " + hour + prepand + " : " + minute + " : " + second);