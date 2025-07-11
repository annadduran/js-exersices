// Function to find the mode (most frequently occurring element) in an array
function array_element_mode(arr) {
  var ctr = [],  // Counter array to store frequencies of elements
    ans = 0;     // Variable to store the index of the mode

  // Initialize the counter array with zeros for each possible element
  for (var i = 0; i < 10; i++) {
    ctr.push(0);
  }

  // Iterate through the input array to update the frequencies in the counter array
  for (var i = 0; i < arr.length; i++) {
    ctr[arr[i] - 1]++;  // Increment the frequency of the current element
    if (ctr[arr[i] - 1] > ctr[ans]) {
      ans = arr[i] - 1;  // Update the index of the mode if a higher frequency is found
    }
  }

  return ans + 1;  // Return the mode (add 1 to convert from zero-based index to element value)
}

// Example usage
console.log(array_element_mode([1, 2, 3, 2, 2, 8, 1, 9]));  // 2
