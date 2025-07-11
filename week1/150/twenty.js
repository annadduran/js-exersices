//Define a function that takes two parameters x and y
function positive_negative(x,y){
    //check if either x is negative and is positive, or x is positive and y is negative
    if ((x < 0 && y > 0) || (x > 0 && y < 0)){
        //if true return true
        return true;
    } else {
        //if false return false 
        return false;
    }
}

console.log(positive_negative(2,2));

console.log(positive_negative(-2,2));


console.log(positive_negative(2,-2));

console.log(positive_negative(-2,-2));
 