// Function to convert a hexadecimal string to its ASCII representation
function hex_to_ascii(str1) {
    // Convert the input hexadecimal string to a regular string
    var hex = str1.toString();
    // Initialize an empty string to store the resulting ASCII characters
    var str = '';
    // Iterate through the hexadecimal string, processing two characters at a time
    for (var n = 0; n < hex.length; n += 2) {
        // Extract two characters from the hexadecimal string and convert them to their ASCII equivalent
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    // Return the resulting ASCII string
    return str;
}
// Example usage of the hex_to_ascii function
console.log(hex_to_ascii('3132'));   // Output: '12'
console.log(hex_to_ascii('313030')); // Output: '100'
