//define a function that takes a parameter n 
function diff_num(n){
    //check if n is less tha or equal to 19
    if (n>=19){
        //if true return the difference between 19 and n
        return (19 - n);
    }else{
        //if false , return three times the difference between 19 and n
        return (n - 19) *3;
    }

}

//log teh result calling the function 
console.log(diff_num(12));

console.log(diff_num(30));

console.log(diff_num(19));