// Function to check if there's a common element in two arrays
function check_common_element(arra1, arra2) {
  for (var i = 0; i < arra1.length; i++) {
    // Check if the current element from arra1 exists in arra2
    if (arra2.indexOf(arra1[i]) != -1) {
      return true; // If found, return true
    }
  }
  return false; // If no common element is found, return false
}

// Example usage
console.log(check_common_element([1, 2, 3], [3, 4, 5])); // Should return true as 3 is a common element
console.log(check_common_element([1, 2, 3], [5, 6, 7])); // Should return false as no common elements are found   
