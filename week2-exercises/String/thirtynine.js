// Define a function named Uncapitalize which takes a string (str1) as input
function Uncapitalize(str1){
  // Return the input string with its first character converted to lowercase,
  // concatenated with the rest of the string starting from the second character
  return str1.charAt(0).toLowerCase() + str1.slice(1);
}
// Call the Uncapitalize function with the input string 'Js string exercises'
// and print the result to the console
console.log(Uncapitalize('Js string exercises'));
console.log(Uncapitalize('Taylor Swift'));
 