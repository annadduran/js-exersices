// Define a function named validateArrayNotEmpty that takes one parameter: arr
function validateArrayNotEmpty(arr) {
  // Check if the length of the array is equal to 0
  if (arr.length === 0) {
    // If the array is empty, throw an error indicating that the array is empty
    throw new Error('Array is empty!');
  }
}

// Example usage:
try {
  // Create an array nums1 with elements [1, 2, 3, 4]
  const nums1 = [1, 2, 3, 4];
  // Call the validateArrayNotEmpty function with nums1 as an argument, which is a valid non-empty array
  validateArrayNotEmpty(nums1); // Valid non-empty array

  // Create an empty array nums2
  const nums2 = [];
  // Call the validateArrayNotEmpty function with nums2 as an argument, which is an empty array and will throw an error
  validateArrayNotEmpty(nums2); // Throws an error
} catch (error) {
  // Catch and log any error that occurs during execution
  console.log('Error:', error.message);
}
