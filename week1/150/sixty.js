//define a function with parameter str
function without_first_end(str){
    //use substring to get a portion of the string excluding the first and last charcaters
    return str.substring(1, str.length - 1);
}

//log the result
console.log(without_first_end('JavaScript'));
console.log(without_first_end('taylor'));
console.log(without_first_end('PHP'));