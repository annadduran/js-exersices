// Function to calculate alternate sums of elements in an array
function alternate_Sums(arr) {
  var result = [0, 0]; // Initialize an array to store alternate sums
  for(var i = 0; i < arr.length; i++) 
  {	
    if(i % 2) result[1] += arr[i]; // If index is odd, add the element to the second sum
    else
      result[0] += arr[i]; // If index is even, add the element to the first sum
  }
  return result; // Return the array of alternate sums
}

// Example usage
console.log(alternate_Sums([1, 3, 6, 2, 5, 10])); // Output: [14, 8]
