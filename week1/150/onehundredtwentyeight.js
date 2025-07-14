// Function to find the nearest round number
function nearest_round_number(num) {
    // Loop until the number is divisible by 10
    while (num % 10) {
        // Increment the number by 1 until it is divisible by 10
        num++;
    }
    // Return the nearest round number
    return num;
}

// Test cases
console.log(nearest_round_number(56)); // Output: 60
console.log(nearest_round_number(592)); // Output: 600
