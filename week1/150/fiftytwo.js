//define a function with parameter str
function alphabet_Soup(str){
    //split the string into an array if charcaters, sort the array, and join it back into a string
    return str.split("").sort().join("");
}

//log the result 
console.log(alphabet_Soup("Taylor"));
console.log(alphabet_Soup("Python"));
