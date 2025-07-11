// Define a function called capitalizeWords that takes a string str as input
function capitalizeWords(str) {
    // Use the replace method with a regular expression \w\S* to match each word in the string
    // For each matched word, execute a callback function
    return str.replace(/\w\S*/g, function(txt) {
        // Inside the callback function, convert the first character of the word to uppercase
        // and keep the rest of the word unchanged
        return txt.substr(0).toUpperCase();
    });
}
// Call the capitalizeWords function with the input string 'js string exercises' and print the result to the console
console.log(capitalizeWords('js string exercises'));
