// Function to add the two digits of a number
function add_two_digits(n) {
    // Return the sum of the last digit and the result of dividing the number by 10 and rounding down
    //the last number n % 10
    //the first number Math.floor(n / 10);
    return n % 10 + Math.floor(n / 10);
}	

// Example usage
console.log(add_two_digits(25));  // Output: 7 (2 + 5)
console.log(add_two_digits(50));  // Output: 5 (5 + 0)
