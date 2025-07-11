// Function to find the maximum absolute difference between elements of an array that is less than or equal to a given number
function different_values(ara, n) {
    var max_val = -1; // Initializing the maximum value as -1

    
    for (var i = 0; i < ara.length; i++) { // Looping through the array elements
        for (var j = i + 1; j < ara.length; j++) { // Nested loop for comparisons with subsequent elements
            var x = Math.abs(ara[i] - ara[j]); // Calculating the absolute difference between elements
            if (x <= n) { // Checking if the absolute difference is less than or equal to 'n'
                max_val = Math.max(max_val, x); // Updating the maximum value if the condition is met
            }
        }
    }
    return max_val; // Returning the maximum value found
}

// Examples of using the function with different arrays and values of 'n'
console.log(different_values([12, 10, 33, 34], 10)); // Example usage
console.log(different_values([12, 10, 33, 34], 24)); // Example usage
console.log(different_values([12, 10, 33, 44], 40)); // Example usage 
