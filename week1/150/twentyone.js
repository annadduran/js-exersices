//define a function  that takes a parameter str1
function string_check(str1){
    //check id str1 is null, undefines, or starts with the substring 'py'
    if (str1 === null || str1 === undefined || str1.substring(0,2) === 'Py'){

        //if true, return str1 
        return str1;
    }
    //if false, prepend 'py' to str1 and return the result 
    return "Py" + str1;
}       

//log the result calleing the function 

console.log(string_check("Python"));

console.log(string_check("thon"));