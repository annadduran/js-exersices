// Define a function named capitalize that takes a string str1 as input
capitalize = function(str1){
  // Capitalize the first character of the input string and concatenate it with the rest of the string starting from the second character
  return str1.charAt(0).toUpperCase() + str1.slice(1);
}    
// Output the result of capitalizing the string 'js string exercises'
console.log(capitalize('js string exercises'));
 