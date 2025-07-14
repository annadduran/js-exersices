// Function to compute prefix sums of an array
function prefix_sums(arr) {
  var new_arr = []; // Initialize an empty array to store prefix sums
  
  // Loop through the input array
  for (var i = 0; i < arr.length; i++) {
    new_arr[i] = 0; // Initialize each element in the new array to 0
    
    // Compute the prefix sum up to index 'i' in the input array
    for (var j = 0; j < i + 1; j++) {
      new_arr[i] += arr[j]; // Sum the elements from index 0 to 'i'
    }
  }
  
  return new_arr; // Return the array containing prefix sums
}

// Test cases
console.log(prefix_sums([1, 2, 3, 4, 5])); // Output: [1, 3, 6, 10, 15]

console.log(prefix_sums([1, 2, -3, 4, 5])); // Output: [1, 3, 0, 4, 9]
