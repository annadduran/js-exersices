//define a function  with a parameter str
function string_reverse(str){
    //split the string into an angry of charcater , reverse the order, and join them back into a string
    return str.split("").reverse().join("");
}

//log the result calling the function 
console.log(string_reverse("Taylor"));

console.log(string_reverse("JavaScript"));