// Define a function named char_count that counts the occurrences of a specified letter in a given string
function char_count(str, letter) {
    // Initialize a variable letter_Count to store the count of occurrences
    var letter_Count = 0;

    // Iterate through each position in the input string
    for (var position = 0; position < str.length; position++) {
        // Check if the character at the current position is equal to the specified letter
        if (str.charAt(position) == letter) {
            // If true, increment the letter_Count by 1
            letter_Count += 1;
        }
    }

    // Return the final count of occurrences
    return letter_Count;
}

// Log the result of calling char_count with the input string 'w3resource.com' and the letter 'o' to the console
console.log(char_count('w3resource.com', 'o')); 
