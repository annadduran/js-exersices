//define a functon that takes a parameter x
function test37(x){
    //check is x is divisible by 3 or 7
    if (x % 3 == 0  || x % 7 == 0){
        //if true return true 
        return true;
    }

    //if nos divisible by 3 and 7 return false 
    else{
        return false;
    }
}

//log the result callgin the function 
console.log(test37(12));

console.log(test37(10));

console.log(test37(17));

