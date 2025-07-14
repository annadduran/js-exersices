// Function to find the Kth greatest element in an array
function Kth_greatest_in_array(arr, k) {
  // Iterate for the first K elements
  for (var i = 0; i < k; i++) {
    var max_index = i,       // Assume the current index as the maximum index
      tmp = arr[i];          // Temporary variable to store the current element
	
    // Iterate through the remaining elements to find the maximum
    for (var j = i + 1; j < arr.length; j++) {
      // If the current element is greater than the element at max_index, update max_index
      if (arr[j] > arr[max_index]) {
        max_index = j;
      }
    }

    // Swap the current element with the maximum element found
    arr[i] = arr[max_index];
    arr[max_index] = tmp;
  }

  // Return the Kth greatest element
  return arr[k - 1];
}

// Example usage
console.log(Kth_greatest_in_array([1,2,6,4,5], 3));       // 4
console.log(Kth_greatest_in_array([-10,-25,-47,-36,0], 1)); // 0
