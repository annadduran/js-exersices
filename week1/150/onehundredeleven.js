// Function to find the third number that is different from the other two given numbers
function find_third_number(x, y, z) {
  // Check if all three numbers are unequal
  if ((x !== y) && (x !== z) && (y !== z)) {
    return "Three numbers are unequal."; // Return a message if all three numbers are unequal
  }
  
  // Check if the first number is equal to the second number
  if (x === y) {
    return z; // Return the third number if the first and second numbers are equal
  }

  // Check if the first number is equal to the third number
  if (x === z) {
    return y; // Return the second number if the first and third numbers are equal
  }

  return x; // Return the first number (default case when second and third numbers are equal)
}

// Example usage of the function
console.log(find_third_number(1, 2, 2)); // Output: 1 (the first number different from the other two: 1)
console.log(find_third_number(1, 1, 2)); // Output: 2 (the third number different from the other two: 2)
console.log(find_third_number(1, 2, 3)); // Output: "Three numbers are unequal." (all three numbers are different) 
