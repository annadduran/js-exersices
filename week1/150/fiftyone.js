//define a function with parameter num
function time_convert(num){
    //calculate the number of hours by dividing num by 60 and rounding down
    var hours = Math.floor(num/60);

    //calculate the remaining minutes by taking the remainder when dividing num by 60
    var minutes = num % 60;

    //return the result as a string in the format hours: minutes
    return hours + ":" + minutes;
}

//log the result
console.log(time_convert(71));

console.log(time_convert(450));

console.log(time_convert(200));
