//define a function with parameters str1 and str2 
function concatenate (str1, str2){
    //modify str1 to exlude the first character
    str1 = str1.substring(1, str1.length);
    //modify str2 to exclude the first character
    str2 = str2.substring(1, str1.length);

    return str1 + str2;
}

//log the result 
console.log(concatenate("PHP", "JS"));

console.log(concatenate("TTaylor", "SSwift"));

console.log(concatenate("xHarry", "x1D"));