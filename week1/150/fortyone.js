//define a function with parameters x, y and z
function three_numbers(x, y, z){
    //check if x, y and y are equal 
    if ( x == y && y == z){
        //if numbers are equal return 30
        return 30;
    }

    //check i f at least two of x, y and z are equal 
    if (x == y || y == z || z == x){
        //if two numbers are equal return 40 
        return 40;
    }

    //return 20 if none of condition met
    return 20;
}

//log the results
console.log(three_numbers(8, 8, 8));

console.log(three_numbers(10, 10, 8));

console.log(three_numbers(8, 2, 3));