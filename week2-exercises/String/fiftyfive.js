/**
 * Defines a function `test` to check if a string contains all 26 English alphabet letters.
 * @param {string} string - The input string to be tested.
 * @returns {boolean|string} - Returns true if the string contains all 26 English alphabet letters,
 * otherwise returns a message indicating that the input must be a string.
 */
const test = (string) => {
  // Check if the input parameter is a string
  if (typeof string !== 'string') {
    return 'It must be a string.';
  }
  
  // Create a new Set to store unique uppercase characters from the string
  const result = new Set();
  
  // Loop through each character in the string, converting it to uppercase
  for (const ch of string.toUpperCase()) {
    // Check if the character is an uppercase English alphabet letter
    if (/[A-Z]/.test(ch)) {
      // Add the character to the result set if it is an alphabet letter
      result.add(ch);
    }
  }
  
  // Check if the result set size is equal to 26 (i.e., contains all 26 English alphabet letters)
  return result.size === 26;
};

// Test the `test` function with different input strings and log the results
console.log(test("The quick brown fox jumps over the lazy dog"));
console.log(test("Waltz, bad nymph, for quick jigs vex."));
console.log(test("The five boxing wizards jump quickly."));
console.log(test("The boxing wizards jump quickly."));
console.log(test(12356));
