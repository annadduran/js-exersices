// Define a function named two_string with parameters str and n
function two_string(str, n) {
    // Extract the first part of the string from index 0 to n (exclusive)
    first_part = str.substring(0, n);
    // Extract the last part of the string from (length - n) to the end
    last_part = str.substring(str.length - n);
    // Concatenate the first and last parts and return the result
    return first_part + last_part;
}

// Call the function with sample arguments and log the results to the console
console.log(two_string("JavaScript", 2));
console.log(two_string("JavaScript", 3));
