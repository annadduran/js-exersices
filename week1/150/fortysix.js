//define a function with parameters a and b 
function valCheck(a,b){
    //check if the negation of the condition is true 
    if (!((a % 7 ===0 || a % 11 ===0) && (b % 7===0  || b % 11 === 0))){
        //return true is either a is divisible by 7 or 11 , or b divisible by 7 or 11
        return ((a % 7 ===0 || a % 11 ===0) ||(b % 7===0  || b % 11 === 0));
    }else{
        return false;
    }
    
}

//log the result 
console.log(valCheck(14,21));

console.log(valCheck(14,20));

console.log(valCheck(16,20));