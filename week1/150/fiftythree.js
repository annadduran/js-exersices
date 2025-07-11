//define a function with parameter str
function ab_Check(str){
    //use resular expression to check if the pattern 'a...b' or 'b...a' exist in the given string
    //the test() method retunr true if the pattern is found, otherwise, it returns false
    return (/a...b/).test(str) || (/b...a/).test(str);
}

//log the result
console.log(ab_Check("Chainsbreak"));

console.log(ab_Check("abCheck"));

