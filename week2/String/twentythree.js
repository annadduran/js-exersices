// Define a function named strip that removes leading and trailing whitespaces from a string
function strip(str) {
    // Use the replace method with a regular expression to remove leading and trailing whitespaces
    return str.replace(/^\s+|\s+$/g, '');
}

// Test the strip function with various input strings and log the results
console.log(strip('w3resource '));     // Output: 'w3resource'
console.log(strip(' w3resource'));     // Output: 'w3resource'
console.log(strip(' w3resource  '));   // Output: 'w3resource'
