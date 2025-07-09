//define a function with parameter str (string) and n (number)
function string_copies(str, n){
    //check if n is less than 0
    if ( n < 0)
        //return false if  is negative 
        return false;
    else
        //use the repeat method tto replicate the strin 'n' times
        return str.repeat(n);
}

//log the result 
console.log(string_copies("abc", 5));

console.log(string_copies("taylor", 13));