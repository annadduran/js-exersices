//define a function named difference that takes parameter n
function difference(n) {
    // check if n is less or equal than 13
    if (n <= 13){
        //if true, return the difference betwen 13 and n
        return 13 - n;

    }else {
        //if false return the double of the difference between n and 13
        return (n -13)*2;
    }
} 

//log the result of calling the difference function 
console.log(difference(32));

console.log(difference(13));