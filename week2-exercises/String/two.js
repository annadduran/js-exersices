// Define a function called is_Blank that checks if the input string is blank
is_Blank =  function(input) {
    // Check if the length of the input string is 0
    if (input.length === 0)
        // If the length is 0, return true indicating that the string is blank
        return true;
    else
        // If the length is not 0, return false indicating that the string is not blank
        return false;
}
// Print the result of calling is_Blank with an empty string
console.log(is_Blank(''));
// Print the result of calling is_Blank with a non-empty string ('abc')
console.log(is_Blank('abc'));
