// Define a function named camelize, taking a string parameter 'str'
camelize = function camelize(str) {
    // Use the replace method with a regular expression to match non-word characters followed by any character
    // The regular expression /\W+(.)/g matches one or more non-word characters followed by any character, capturing the character
    // For each match, a callback function is invoked with 'match' representing the entire match and 'chr' representing the captured character
    return str.replace(/\W+(.)/g, function(match, chr) {
        // Convert the captured character to uppercase and return it
        return chr.toUpperCase();
    });
}

// Output the result of camelize function for different input strings
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
