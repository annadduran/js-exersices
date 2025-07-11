/**
 * Function to test if all digits in the number are the same
 * @param {number} num - The input number
 * @returns {boolean} - Returns true if all digits are the same, false otherwise
 */
function test_same_digit(num) {
  var first = num % 10; // Extracting the last digit as a reference
  while (num) {
    if (num % 10 !== first) return false; // Checking if the current digit is different from the reference
    num = Math.floor(num / 10); // Removing the last digit by integer division
  }
  return true; // Returning true if all digits are the same
}

console.log(test_same_digit(1234)); // Output: false
console.log(test_same_digit(1111)); // Output: true
console.log(test_same_digit(22222222)); // Output: true 
