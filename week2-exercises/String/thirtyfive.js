// Function to strip HTML tags from a given string
function strip_html_tags(str) {
    // Check if the input string is null or empty
    if ((str === null) || (str === '')) {
        // If so, return false
        return false;
    } else {
        // If not, convert the input string to a string type
        str = str.toString();
    }
    // Use a regular expression to replace all HTML tags with an empty string
    return str.replace(/<[^>]*>/g, '');
}

// Test the function with a sample string and log the result to the console
console.log(strip_html_tags('PHP Exercises'));

console.log(strip_html_tags('<h1>PHP</h1> Exercises'));

