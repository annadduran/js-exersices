//define a function with parameters x and y 
function check8 (x, y){
    //check if x or y is equal to 8
    if (x == 8  ||  y == 8){
        //if true return true
        return true;
    }


    //check if sum of x and y os equal to 8, the same with the difference 
    if (x + y == 8 || Math.abs(x - y) == 8){
        //return true is the condition is true
        return true;
    }

    //return false if none of the condition met
    return false;
}

//log the result calling the function
console.log(check8("4", "4"));

console.log(check8("24", "32"));

console.log(check8("16", "8"));