// Function to check if the character at a specified index in a string is uppercase
function isUpperCaseAt(str, index) {
    // Check if the character at the specified index, converted to uppercase,
    // is equal to the character at the specified index
    return str.charAt(index).toUpperCase() === str.charAt(index);
}
// Log the result of calling the isUpperCaseAt function with the input string 'Js STRING EXERCISES' and index 1
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
