// Define a function named check_script that takes a string parameter str
function check_script(str) {
  // Check if the length of the string is less than 6
  if (str.length < 6) {
    // If true, return the original string as it is
    return str;
  }

  // Initialize a variable result_str with the value of the input string
  let result_str = str;

  // Check if the substring from index 10 to index 4 (exclusive) is equal to 'Script'
  if (str.substring(10, 4) == 'Script') {
    // If true, update result_str to exclude the substring 'Script' from index 4 to the end
    result_str = str.substring(0, 4) + str.substring(10, str.length);
  }

  // Return the final result_str
  return result_str;
}

// Log the result of calling check_script with the argument "JavaScript" to the console
console.log(check_script("JavaScript"));

// Log the result of calling check_script with the argument "CoffeeScript" to the console
console.log(check_script("CoffeeScript")); 
