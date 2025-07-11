//define a function with parameter str
function upper_lower (str){
    //check if the length of str is less than 3 
    if ( str.length < 3){
        //if true return the uppercase version of the entire string
        return str.toUpperCase();
    } 

    //create a variable and store the lowercase version of the first charcaters of str
    front_part = (str.substring(0,3)).toLowerCase();

    //create a variable and store the substring of str from indec 3 to the end
    back_part = str.substring(3, str.length);

    //return the concatenation 
    return front_part + back_part;
}

//Log the result calling the funciton
console.log(upper_lower("Python"));
console.log(upper_lower("PY"));
console.log(upper_lower("TAYLOR"));
console.log(upper_lower("holamundo"));