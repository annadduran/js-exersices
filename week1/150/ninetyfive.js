// Function to replace a specified element in an array with a new value
function array_element_replace(arr, old_value, new_value) {
  for (var i = 0; i < arr.length; i++) {
    // Check if the current element is equal to the old value
    if (arr[i] === old_value) {
      arr[i] = new_value;  // Replace the old value with the new value
    }
  }
  return arr;  // Return the modified array
}

// Example usage
num = [1, 2, 3, 2, 2, 8, 1, 9];  // Original array
console.log("Original Array: " + num);
console.log(array_element_replace(num, 2, 5));  // Replace 2 with 5 in the array
