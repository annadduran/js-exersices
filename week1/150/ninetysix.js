// Function to calculate the sum of adjacent differences in an array
function sum_adjacent_difference(arr) {
    var result = 0;  // Variable to store the result
    for (var i = 1; i < arr.length; i++) {
        // Add the absolute difference between adjacent elements to the result
        result += Math.abs(arr[i] - arr[i - 1]);
    }
    return result;  // Return the final sum
}

console.log(sum_adjacent_difference([1, 2, 3, 2, -5]));  // Example usage
