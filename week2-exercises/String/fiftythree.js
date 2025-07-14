/**
 * Define a function named test which takes a single parameter 'text'.
 * @param {string} text - The input text to be tested.
 * @returns {boolean|string} - Returns true if the input text contains only lowercase letters, otherwise returns a string message.
 */
const test = (text) => {
  // Check if the input parameter is a string.
  if (typeof text !== 'string') {
    return 'It must be a string.';
  }
  
  // Define a regular expression pattern to match strings containing only lowercase letters.
  const pattern = /^[a-z]*$/;
  
  // Test if the input text matches the defined pattern.
  return pattern.test(text);
};

// Test the function with various inputs and log the results.
console.log(test('j')); // true
console.log(test('java exercises')); // false
console.log(test('JavaScriptExercises')); // false
console.log(test('javascriptexercises')); // true
console.log(test(12356)); // 'It must be a string.'
