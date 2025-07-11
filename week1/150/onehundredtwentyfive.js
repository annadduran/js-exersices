// Function to find the longest string in an array
function longest_str_in_array(arra) {
  var max_str = arra[0].length; // Initialize max_str with the length of the first string
  var ans = arra[0]; // Initialize ans with the first string

  // Loop through the array starting from the second element
  for (var i = 1; i < arra.length; i++) {
    var maxi = arra[i].length; // Get the length of the current string

    // Compare the length of the current string with max_str
    if (maxi > max_str) {
      ans = arra[i]; // If current string is longer, update ans
      max_str = maxi; // Update max_str with the new maximum length
    }
  }

  return ans; // Return the longest string found
}

// Testing the function with different arrays
console.log(longest_str_in_array(["ab", "a", "abcd"])); // Output: "abcd" (Longest string in the array)
console.log(longest_str_in_array(["ab", "ab", "ab"])); // Output: "ab" (All strings are of equal length) 
