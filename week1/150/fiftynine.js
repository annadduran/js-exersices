//define a function with parameter str
function first_half(str){
    //check if the length of the string is even 
    if (str.length % 2 == 0){
        //use the slice method to get the first half of the string
        return str.slice(0, str.length / 2);
    }

    //if the length is odd , return the original string
    return str;
}

//call the function 
console.log(first_half("Python"));
console.log(first_half("JavaScript"));
console.log(first_half("onedirection"));