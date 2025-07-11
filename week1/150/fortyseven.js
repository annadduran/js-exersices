//define a function with parameter n 
function test_digit(n){
    //check if n s less tha 40 or greater tha 10000
    if ( n < 40  || n > 10000){
        return false; 
    }else 
        //check if n is between the range 
        if (n >= 40 && n <= 10000)
            return true;
    
}

//log the result 
console.log(test_digit(45));

console.log(test_digit(100));

console.log(test_digit(30));

