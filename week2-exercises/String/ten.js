// Define a function named swapcase that takes a string str as input
swapcase = function swapcase(str) {
    // Use the replace method with a regular expression to match lowercase and uppercase letters separately
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        // For each match, if chr (lowercase letter) exists, convert it to uppercase; otherwise, convert the match (uppercase letter) to lowercase
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
// Output the result of applying the swapcase function to the string 'AaBbc'
console.log(swapcase('AaBbc'));
