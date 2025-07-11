 // Define a function named truncate that takes two parameters: a string (str) and the number of words to truncate to (no_words)
function truncate(str, no_words) {
    // Split the input string into an array of words using the space character (" ") as the delimiter, then extract a portion of the array containing the specified number of words using the splice method, and finally join the selected words back into a single string with spaces between them
    return str.split(" ").splice(0,no_words).join(" ");
}

// Call the truncate function with a sample string and a specified number of words to truncate to, then output the result
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
console.log(truncate('The tortued poets departament', 2));
