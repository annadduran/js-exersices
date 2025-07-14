// Function to check if a string ends with a specified suffix
function string_endsWith(str, suffix) 
{
    // Check if either string is null or empty
    if (((str === null) || (str === '')) || ((suffix === null) || (suffix === '')))
    {
        return false; // Return false if either string is null or empty
    }
    else
    {     
        // Convert both strings to type string
        str = str.toString();
        suffix = suffix.toString();
    }
    // Check if the suffix is found at the end of the string
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

// Example usage of the string_endsWith function
console.log(string_endsWith('JS PHP PYTHON', 'PYTHON')); // Output: true
console.log(string_endsWith('JS PHP PYTHON', '')); // Output: false
