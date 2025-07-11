// Define a function named endsWith that checks if a given input string ends with a specified substring.
function endsWith(input, string) {
    // Calculate the starting index from where to search for the substring in the input string.
    var index = input.length - string.length;
    // Check if the calculated index is non-negative and if the substring is found in the input string starting from the calculated index.
    return index >= 0 && input.indexOf(string, index) > -1;
}

// Test the endsWith function with a sample input and log the result to the console.
console.log(endsWith('JS string exercises', 'exercises'));
