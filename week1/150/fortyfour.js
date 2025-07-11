//define a function with parameters x, y and z
function lessby20_others(x, y, z){
    //check if x is greater than or equal to 20 (x is less than x or x is less than z)
    //check if y greater than or equal to 20 (y is less than x or y is less than z)
    //check if z is greater than or equal to 20 and  (z is less than y is less than x)
    return (
        (x >= 20 && (x < y  ||x < z )) || 
        (y >= 20 && (y < x  ||x < z )) || 
        (z >= 20 && (z < y  ||z < x )) 
    ) ;
} 

//log the result calling the function
console.log(lessby20_others(23, 45, 10));

console.log(lessby20_others(10, 45, 10));

console.log(lessby20_others(30, 50, 50));

