//define a function with parameters x and y
function max_townum_range(x,y){
    //check if x and y fall within the specified range using logical AND and comparision operators
    if (x >=40 && x <= 60 && y >= 40 && y <= 60){
        //check if x and y are the same 
        if (x === y){
            return "Numbers are the same";

        } else if (x > y){
            return x ; //return x if it is greater than y 
        } else {
            return y; //return y if it is greater thanx 
        }
    } else {
        return "Numbers don't fit in range"; // return this message if number are outside tha range
    }
}

//log the results 
console.log(max_townum_range(45,60));

console.log(max_townum_range(25,60))