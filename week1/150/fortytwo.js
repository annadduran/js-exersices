//define a function that takes parameters x, y and z
function number_order(x, y, z){
    //check if y is greater than x,  and z is greater than y 
    if (y > x &&   z > y){
        return "STRICT MODE";
    }

    //check if z is greater than y 
    if ( z > y){
        return "SOFT MODE";
    }

    else{
        return "Undifined"
    }
}

//log the results calling the function

console.log(number_order(10, 14, 20));

console.log(number_order(24, 22, 30));

console.log(number_order(80, 14, 20));

console.log(number_order(10, 10, 20));

console.log(number_order(5, 10, 15));