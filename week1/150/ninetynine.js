// Function to check if characters of str1 can be rearranged to form str2
function rearrangement_characters(str1, str2) {
  // Splitting the strings into arrays of characters
  var first_set = str1.split(''), // Array for characters of str1
      second_set = str2.split(''), // Array for characters of str2
      result = true; // Variable to store the result of rearrangement check

  // Sorting the character arrays in ascending order
  first_set.sort();
  second_set.sort();

  // Loop through the arrays to compare each character position
  for (var i = 0; i < Math.max(first_set.length, second_set.length); i++) {
    // Check if characters at the same position in both arrays are different
    if (first_set[i] !== second_set[i]) {
      result = false; // Set result to false if characters differ
    }
  }

  return result; // Return the final result of rearrangement check
}

// Testing the function with sample strings
console.log(rearrangement_characters("xyz", "zyx")); // Example usage
console.log(rearrangement_characters("xyz", "zyp")); // Example usage 
