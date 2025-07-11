// Function to delete a digit from a given number and return the maximum resulting number
function digit_delete(num) {
    var result = 0, // Variable to store the maximum resulting number
        num_digits = []; // Array to store individual digits of the number

    // Extract digits of the number and store them in an array
    while (num) {
        num_digits.push(num % 10);
        num = Math.floor(num / 10);
    }

    // Iterate through each digit and generate numbers after deleting each digit
    for (var index_num = 0; index_num < num_digits.length; index_num++) {
        var n = 0; // Temporary variable to store the generated number

        // Create a new number without the current indexed digit
        for (var i = num_digits.length - 1; i >= 0; i--) {
            if (i !== index_num) {
                n = n * 10 + num_digits[i];
            }
        }

        // Store the maximum number obtained after deleting each digit
        result = Math.max(n, result);
    }

    return result; // Return the maximum resulting number
}

// Test cases
console.log(digit_delete(100)); // Example usage
console.log(digit_delete(10)); // Example usage
console.log(digit_delete(1245)); // Example usage
