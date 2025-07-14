/**
 * Function to swap the halves of an array
 * @param {Array} iarra - The input array
 * @returns {(boolean|Array)} - Swapped array if even length, otherwise false
 */
function halv_array_swap(iarra) {
  // Check if the array length is even
  if ((iarra.length % 2) !== 0) {
    return false; // Return false if the array length is odd
  }

  // Swap the halves of the array
  for (var i = 0; i < iarra.length / 2; i++) {
    var tmp = iarra[i]; // Temporary variable to store the current element
    iarra[i] = iarra[i + iarra.length / 2]; // Swap the first half with the second half
    iarra[i + iarra.length / 2] = tmp; // Swap the second half with the first half
  }
  return iarra; // Return the swapped array
}

// Test cases
console.log(halv_array_swap([1, 2, 3, 4, 5, 6])); // Output: [4, 5, 6, 1, 2, 3]
console.log(halv_array_swap([1, 2, 3, 4, 5, 6, 7])); // Output: false 
