//define a function tha takes three parameters x, y and z
function check_three_nums(x, y, z){
    //check if at the least one of the numbers is in the range between 50 and 99
    return (x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99 ); 
}

//log the result calling the function
console.log(check_three_nums(50, 90, 99));

console.log(check_three_nums(5, 9, 199));

console.log(check_three_nums(65, 85, 199));
