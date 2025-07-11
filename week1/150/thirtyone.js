//define a function tha takes three parameters x, y and z
function max_of_three(x,y,z){
    //initialize a variable max_val with the value 0
    let max_val = 0;

    //check if x is greater than y
    if( x > y){
        //if true, assign the value of x to max_val
        max_value = x;
    } else {
        //if false , assign the value of y to max_val
        max_val = y;
    }

    //check if z is greater than max_val
    if (z > max_val){
        //if true , update max_val to the value of z
        max_val = z;
    }

    //return the final value of max_val
    return max_val;
}

//log the result calling the function
console.log(max_of_three(1, 0, 1));
console.log(max_of_three(0, -10, 20));
console.log(max_of_three(1000, 510, 400));
