/**
 * Function to count the number of same elements in both arrays
 * @param {Array} arra1 - The first input array
 * @param {Array} arra2 - The second input array
 * @returns {number} - Returns the count of same elements between the arrays
 */
function test_same_elements_both_arrays(arra1, arra2) {
  var result = 0; // Counter to store the count of same elements

  // Loop through the first array
  for (var i = 0; i < arra1.length; i++) {
    // Loop through the second array
    for (var j = 0; j < arra2.length; j++) {
      if (arra1[i] === arra2[j]) {
        result++; // Increment the counter if the elements match
      }
    }
  }
  return result; // Return the count of same elements
}

console.log(test_same_elements_both_arrays([1, 2, 3, 4], [1, 2, 3, 4])); // Output: 4
console.log(test_same_elements_both_arrays([1, 2, 3, 4], [1, 2, 3, 5])); // Output: 3
console.log(test_same_elements_both_arrays([1, 2, 3, 4], [11, 22, 33, 44])); // Output: 0 
