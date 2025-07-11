// Function to find the maximum difference between adjacent elements in an array
function max_difference(arr) {
  var max = -1;     // Initialize a variable to store the maximum difference
  var temp;         // Temporary variable to calculate the difference

  // Iterate through the array to find the maximum difference
  for (var i = 0; i < arr.length - 1; i++) {
    temp = Math.abs(arr[i] - arr[i + 1]);  // Calculate the absolute difference
    max = Math.max(max, temp);             // Update the maximum difference
  }

  return max;   // Return the final maximum difference
}

// Example usage
console.log(max_difference([1, 2, 3, 8, 9]));   // 5
console.log(max_difference([1, 2, 3, 18, 9]));  // 15
console.log(max_difference([13, 2, 3, 8, 9]));  // 11 
