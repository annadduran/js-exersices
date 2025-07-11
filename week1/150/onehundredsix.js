// Function to divide a number by a digit
function divide_digit(num, d) {
    // Check if divisor is 1, return the number itself
    if (d == 1)
        return num;
    else {
        // Loop to divide the number by the divisor until not divisible
        while (num % d === 0) {
            num /= d; // Divide the number by the divisor
        }
        return num; // Return the final divided number
    }
}

// Example usage of the function with different numbers and divisors
console.log(divide_digit(-12, 2)); // Output: -3
console.log(divide_digit(13, 2)); // Output: 13
console.log(divide_digit(13, 1)); // Output: 13 
