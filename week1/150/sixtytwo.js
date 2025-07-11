//define a function with parameter str
function right_three(str){
    //check if the length of the string is greater tham 1
    if (str.length > 1){
        //return the last three characters concatenated with the substring excluding the last three characters
        return str.slice(-3) + str.slice(0, 3);

    }
    //return the string as is if its length is not greater than 1
    return str;

}

//call the function
console.log(right_three("Python"));
console.log(right_three("JavaScript"));