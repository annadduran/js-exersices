//define a funciton with parameters p, q and r 
function same_last_digit(p, q, r){
    //return true is the last digit of p is equal to q or r
    //of if the last digit of q is equal to the last digit of r
    return (p % 10 === q % 10) ||
           (p % 10 === r % 10) ||
           (q % 10 === r % 10);

}

//log the result calling the function 
console.log(same_last_digit(22, 32, 42));

console.log(same_last_digit(20, 22, 45));

console.log(same_last_digit(11, 21, 91));
