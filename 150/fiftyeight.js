//define a function with parameter str
function newstring(str){
    //check if the length of str is greater than or equal yo 3
    if (str.length >= 3){
        //extract the last 3 charcaters of str
        result_str = str.substring(str.length - 3);
        //return a new string containing the last 3 characters repeated four times
        return result_str + result_str + result_str + result_str;

    }else {
        //return if the length if str is less than 3
        return false;
    }
}

//call the function
console.log(newstring("Python 3.0"));
console.log(newstring("JS"));
console.log(newstring("JavaScript")); 