//define a function that takes two parameters , x and y
function test50(x,y){
    //return true x is equal to 50 or y is equal to 50, or the sum of x and y is equal to 50, otherwise
    return ((x == 50 || y == 50) || (x + y == 50));

}

//log the result calling the function
console.log(test50(50,50));

console.log(test50(10,40));

console.log(test50(20,20));