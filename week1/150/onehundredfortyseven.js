/**
 * Function to calculate the sum of digits from a string
 * @param {string} dstr - The string containing alphanumeric characters
 * @returns {number} - The sum of digits found in the string
 */
function sum_digits_from_string(dstr) {
  var dsum = 0; // Variable to hold the sum of digits

  for (var i = 0; i < dstr.length; i++) {
    // Check if the character is a digit, then convert and add it to 'dsum'
    if (/[0-9]/.test(dstr[i])) dsum += parseInt(dstr[i]);
  }
  return dsum; // Return the sum of digits from the string
}

// Display the sum of digits for different strings
console.log(sum_digits_from_string("abcd12efg9")); // Output: 12
console.log(sum_digits_from_string("w3resource")); // Output: 3 
