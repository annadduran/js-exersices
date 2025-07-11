// Function to alphabetize a string
function alphabetize_string(str) 
{
    // Split the string into an array of characters, sort them alphabetically, then join them back into a string
    return str.split('').sort().join('').trim();
}

// Output the result of alphabetizing the string 'United States'
console.log(alphabetize_string('One direction'));
