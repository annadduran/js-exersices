//ad the first character at the front and the back 

//define a function that takes a parameter str
function front_back(str){
    //extract the first character of str
    first = str.substring(0,1);
    //return the concatenation of first , str and first
    return first + str + first;
}

//log the result calling the function
console.log(front_back('a'));

console.log(front_back('ab'));

console.log(front_back('Hola'));