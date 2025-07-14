// Function to find the maximum even number in an array
function max_even(arra) {
  // Sort the array in descending order
  arra.sort((x, y) => y - x);

  // Loop through the array
  for (var i = 0; i < arra.length; i++) {
    // Check if the current number is even
    if (arra[i] % 2 == 0)
      return arra[i]; // If even, return the number
    }
}

// Testing the function with different arrays
console.log(max_even([20, 40, 200])); // Output: 200 (The maximum even number in the array)
console.log(max_even([20, 40, 200, 301])); // Output: 200 (The maximum even number in the array) 
