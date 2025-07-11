// Define a function named middle_elements that takes two arrays, 'a' and 'b', as parameters
function middle_elements(a, b) {
  // Create a new array named 'new_array'
  var new_array = [];

  // Push the second elements of both arrays into the new_array
  new_array.push(a[1], b[1]);

  // Return the new_array
  return new_array;
}

// Call the function with sample arguments and log the results to the console
console.log(middle_elements([1, 2, 3], [1, 5, 6]));    // Output: [2, 5]
console.log(middle_elements([3, 3, 3], [2, 8, 0]));    // Output: [3, 8]
console.log(middle_elements([4, 2, 7], [2, 4, 5]));    // Output: [2, 4] 
