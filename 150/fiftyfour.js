//define a function with parameter str
function vowel_Count(str){
    //use a regular expression to replace all charcaters not 'aeiou'and empty string
    //ang get the lenght of the resulting string, which count of vowels 
    return str.replace(/[^aeiou]/g, "").length;
}

//log the result
console.log(vowel_Count("Python"));

console.log(vowel_Count("taylor"));

console.log(vowel_Count("holamundo"));

