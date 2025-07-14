// Define a function named compare_strings that takes two string parameters: str1 and str2
function compare_strings(str1, str2) {
    // Convert both strings to uppercase and check if they are equal
    var areEqual = str1.toUpperCase() === str2.toUpperCase();
    // Return the result of the comparison
    return areEqual;
}

// Test the function by comparing two pairs of strings and print the results
console.log(compare_strings('abcd', 'AbcD')); // Output: true
console.log(compare_strings('ABCD', 'Abce')); // Output: false
