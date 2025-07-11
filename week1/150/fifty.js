//define a function with parameter str
function capital_letter(str){
    //split the input string into an array of words
    str = str.split(" ");

    //iterate though each word in the array 
    for (var i = 0, x = str.length; i < x; i++ ){
        //capitalice the first letter of each word
        //str[i][0] takes the first letter of the word
        //.toUpperrCase() converts the firts letter to capital
        //str[i].substr(!) the rest of the word , from the second letter
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    //join the modified array of words back into a string
    return str.join(" ");
}

//log the resuly
console.log(capital_letter("taylor swift"));

console.log(capital_letter("write a javascript program to capitalize the first letter of each word"));