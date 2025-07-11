// Define a function called unCapitalizeWords taking a string parameter str
function unCapitalizeWords(str) {
    // Use the replace method with a regular expression /\w\S*/g to match each word in the string
    // For each matched word, execute a callback function
    return str.replace(/\w\S*/g, function(txt) {
        // In the callback function, convert the first character of each word to lowercase 
        // and keep the rest of the word unchanged
        return txt.substr(0).toLowerCase();
    });
}

// Call the unCapitalizeWords function with the input string 'JS STRING EXERCISES' 
// and print the resulting string to the console
console.log(unCapitalizeWords('JS STRING EXERCISES'));
