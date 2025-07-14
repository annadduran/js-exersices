// Function definition to generate the successor of a given string
function successor(str) {
    // Define the alphabet and its length
    var alphabet = 'abcdefghijklmnopqrstuvwxyz',
        length = alphabet.length,
        result = str,
        i = str.length;

    // Loop through each character of the string from right to left
    while(i >= 0) {
        // Get the last character
        var last = str.charAt(--i),
            next = '', // Initialize the next character
            carry = false; // Flag to indicate if there's a carry operation

        // Check if the last character is a letter
        if (isNaN(last)) {
            // Find the index of the last character in the alphabet
            var index = alphabet.indexOf(last.toLowerCase());

            // If the character is not in the alphabet
            if (index === -1) {
                next = last; // Preserve the character
                carry = true; // Set carry flag
            }
            else {
                // Determine if the last character was uppercase
                var isUpperCase = last === last.toUpperCase();
                // Get the next character in the alphabet
                next = alphabet.charAt((index + 1) % length);
                // If the original character was uppercase, make the next character uppercase
                if (isUpperCase) {
                    next = next.toUpperCase();
                }

                // Check if there's a carry operation
                carry = index + 1 >= length;
                // If there's a carry operation and it's the first character, add a new character
                if (carry && i === 0) {
                    var added = isUpperCase ? 'A' : 'a'; // Determine the case of the added character
                    result = added + next + result.slice(1); // Add the new character to the result
                    break;
                }
            }
        }
        else { // If the last character is a digit
            next = +last + 1; // Get the next digit
            // Check if there's a carry operation
            if(next > 9) {
                next = 0; // Reset to 0 if it's beyond 9
                carry = true; // Set carry flag
            }

            // If there's a carry operation and it's the first character, add a new digit
            if (carry && i === 0) {
                result = '1' + next + result.slice(1); // Add the new digit to the result
                break;
            }
        }

        // Update the result with the next character
        result = result.slice(0, i) + next + result.slice(i + 1);
        // If there's no carry operation, exit the loop
        if (!carry) {
            break;
        }
    }
    // Return the resulting string
    return result;
}

// Test the successor function with sample input
console.log(successor('abcd'));
console.log(successor('3456'));
