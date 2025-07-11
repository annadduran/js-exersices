// Function to change case based on the character count of upper and lower case letters
function change_case(new_str) {
  var x = 0; // Variable to count the number of uppercase letters
  var y = 0; // Variable to count the number of lowercase letters

  // Loop through each character in the input string
  for (var i = 0; i < new_str.length; i++) {
    // Check if the current character is an uppercase letter using a regular expression
    if (/[A-Z]/.test(new_str[i])) {
      x++; // Increment the count of uppercase letters
    } else {
      y++; // Increment the count of lowercase letters
    }
  }

  // Compare the counts and change the case of the input string accordingly
  if (y > x) {
    return new_str.toLowerCase(); // If lowercase count is greater, return string in lowercase
  }
  return new_str.toUpperCase(); // Otherwise, return string in uppercase
}

console.log(change_case("Write")); // Output the result of the function for the input "Write"
console.log(change_case("PHp")); // Output the result of the function for the input "PHp"
