//define a function with parameters x and y 
function test_number(x, y){
    //return true if x is equal to 15 , y is equal to 15, the sum of x and y is equal to 15
    //or the absolute difference between x and y is equal to 15, otherwise return false
    return (x === 15 ||  y === 15 || x + y === 15 || Math.abs(x - y === 15));
}
    
    //log the results callign the function
    console.log(test_number(15, 9));
    console.log(test_number(25, 15));
    console.log(test_number(7, 8));
