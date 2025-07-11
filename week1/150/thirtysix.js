//define a function with parameters x, y and z
function las_digit(x, y, z){
    //check if x, y, and z are greater than 0
    if (x > 0 && y > 0 && z > 0){
        //check if the last digits of x , y and z are equal
        return x % 10 === y % 10 && y % 10 === z % 10 && x % 10 === z % 10;
    } else {
        //if any of the numbers is not greater than 0, return false 
        return false; 
    }
}

//log the result 
console.log(las_digit(20, 30, 400));

console.log(las_digit(-20, 30, 400));

console.log(las_digit(20, 10, 50));


