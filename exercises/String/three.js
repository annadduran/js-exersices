// Define a function named string_to_array that takes a string as input
string_to_array = function (str) {
    // Trim the whitespace from the beginning and end of the string, then split the string into an array using whitespace as the separator
    return str.trim().split(" ");
};
// Call the string_to_array function with the input "Robin Singh" and print the result
console.log(string_to_array("One direction"));
