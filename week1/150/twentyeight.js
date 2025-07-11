//define a function that takes twe parameters x and y 
function check_numbers(x, y){
    //check if x or y is the range between 50 and 99 (inclusive)
    if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)){
        //if true return true 
        return true; 
    }else {
        //if nor in the specific range return false 
        return false;
    }
}

console.log(check_numbers(20, 80));

console.log(check_numbers(12, 101));

console.log(check_numbers(15, 99));
