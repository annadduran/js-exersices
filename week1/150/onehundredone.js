// Function to test a string
function test_string(input_str) {

  // Function to check if symbol is lowercase
  var is_lower_case = function(symbol) {
    if ('a' <= symbol && symbol <= 'z') {
      return true;
    }
    return false;
  }

  // Function to check if symbol is uppercase
  var is_upper_case = function(symbol) {
    if ('A' <= symbol && symbol <= 'Z') {
      return true;
    }
    return false;
  }

  // Check if the first character is lowercase or uppercase
  var is_first_char_lower = is_lower_case(input_str[0]),
    is_first_char_upper = is_upper_case(input_str[0]);

  // If the first character is neither lowercase nor uppercase, return false
  if (!(is_first_char_lower || is_first_char_upper)) {
    return false;
  }

  // Iterate through the string
  for (var i = 1; i < input_str.length; i++) {
    // Check odd positions
    if (i % 2) {
      // Check if the character's case differs from the first character's case
      if (is_lower_case(input_str[i]) === is_first_char_lower ||
        is_upper_case(input_str[i]) === is_first_char_upper) {
        return false; // Return false if cases are the same
      }
    } else {
      // Check if the character's case matches the first character's case
      if (is_lower_case(input_str[i]) !== is_first_char_lower ||
        is_upper_case(input_str[i]) !== is_first_char_upper) {
        return false; // Return false if cases do not match
      }
    }
  }

  return true; // Return true if conditions are met for the entire string
}

console.log(test_string('xYr'));   // Example usage
console.log(test_string('XXyx'));  // Example usage   
