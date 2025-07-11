// Define a function named middle_three with parameter str
function middle_three(str) {
    // Check if the length of str is odd
    if (str.length % 2 !== 0) {
        // Calculate the middle index for odd-length strings
        mid = (str.length + 1) / 2;
        // Use slice to get the middle three characters and return
        return str.slice(mid - 2, mid + 1);
    }
    // Return str if its length is not odd
    return str;
}

// Call the function with sample arguments and log the results to the console
console.log(middle_three('abcdefg'));
console.log(middle_three('HTML5'));
console.log(middle_three('Python'));
console.log(middle_three('abctaydef'));
console.log(middle_three('Exercises')); 
