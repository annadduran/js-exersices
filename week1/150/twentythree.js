//Define a function taht takes a aprameter str1 
function first_last(str1){
    //check if the length pf str1 is less tha or  equal to 1
    if(str1.length <= 1){
        //if true return str1 as is
        return str1;
    }

    //extract the substring from the second character to the second-to-last charcater of str1
    mid_char = str1.substring(1, str1.length -1);
    //return the last charcater of str1 followed by mid_char the the first charcater of str1
    return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
}

//log the result calling the fucntion 
console.log(first_last('a'));

console.log(first_last('ab'));

console.log(first_last('Hola'));