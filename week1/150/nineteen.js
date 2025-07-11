//define a function that takes a parameter x
function testhundred(x){
    //return true if the absolute difference between 100 and x is less tha or equal to 20
    //or the absolute difference between 400 and x is less than or equal to 20, otherwise, return false
    return ((Math.abs(100 - x ) <= 20) || (Math.abs(400 - x) <= 20));
}

//log the results calling the function
console.log(testhundred(10));

console.log(testhundred(90));

console.log(testhundred(200));
