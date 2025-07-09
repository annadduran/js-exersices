// Function to count trailing zeros in the factorial of a number
function trailing_zeros_factorial(n) {
    var result = 0; // Initialize the count of trailing zeros to zero
    for (var i = 5; i <= n; i += 5) { // Loop to calculate the factorial
        var num = i; // Store the current number
        while (num % 5 === 0) { // Check if the number is divisible by 5
            num /= 5; // Divide the number by 5
            result++; // Increment the count of trailing zeros
        }
    }
    return result; // Return the total count of trailing zeros in the factorial of n
}

// Examples of using the function with different values
console.log(trailing_zeros_factorial(8)); // Output: 1 (factorial of 8 has one trailing zero)
console.log(trailing_zeros_factorial(9)); // Output: 1 (factorial of 9 has one trailing zero)
console.log(trailing_zeros_factorial(10)); // Output: 2 (factorial of 10 has two trailing zeros)
