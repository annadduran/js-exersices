// Function to build a palindrome from a given string
function build_Palindrome(new_str) {
  var flag; // Variable to check if a palindrome is found
  for (var i = new_str.length;; i++) { // Loop to increment the length for building a palindrome
    flag = true; // Set the flag initially to true for each iteration
    for (var j = 0; j < i - j - 1; j++) { // Loop to check for palindrome condition
      // Check if characters symmetrically positioned around the center are equal
      if (i - j - 1 < new_str.length && new_str[j] != new_str[i - j - 1]) {
        flag = false; // Set flag to false if characters are not equal
        break; // Break the loop if not a palindrome
      }	
    }
    if (flag) {
      // If a palindrome is found, complete the palindrome by adding the remaining characters
      for (var j = new_str.length; j < i; j++) {
        new_str += new_str[i - j - 1];
      }
      return new_str; // Return the palindrome
    }
  }
}

console.log(build_Palindrome("abcddc")); // Output the result for the given string
console.log(build_Palindrome("122")); // Output the result for the given string
console.log(build_Palindrome("radar"));
