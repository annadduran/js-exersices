/**
 * Function to replace the first digit in a string with '$'
 * @param {string} input_str - The input string
 * @returns {string} - The modified string with the first digit replaced by '$'
 */
function replace_first_digit(input_str) {
  // Using regular expression to replace the first occurrence of a digit with '$'
  return input_str.replace(/[0-9]/, '$');
}

console.log(replace_first_digit("abc1dabc")); // Output: "abc$dabc"
console.log(replace_first_digit("p3ython")); // Output: "p$ython"
console.log(replace_first_digit("ab1cabc")); // Output: "ab$cabc"    
