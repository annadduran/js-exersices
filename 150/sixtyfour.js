//define a function str_con_cat with parameters str1 and str2
function str_con_cat(str1, str2){
    //calculate the minimum length of str1 and str2
    const m = Math.min(str1.length, str2.length);

    //use substring to concatenate the common characters from the end of the both strings
    return str1.substring(str1.length - m) + str2.substring(str2.length - m);

}

console.log(str_con_cat("Python", "JS"));

console.log(str_con_cat("ab", "cdef"));