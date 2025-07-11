 // Define a function called 'test' that takes one parameter 'text'.
const test = (text) => {
  // Check if the type of the 'text' parameter is not a string.
  if (typeof text !== 'string') {
    // If it's not a string, return the message "It must be a string."
    return 'It must be a string.';
  }
  // Define a regular expression pattern that matches strings containing a hyphen between words.
  const pattern = /(\w+)-(\w)([\w-]*)/;
  // Return true if the input text matches the pattern and does not contain an underscore, otherwise return false.
  return pattern.test(text) && !text.includes('_');
}

// Test the 'test' function with different inputs and log the results.
console.log(test('j'));
console.log(test('Java-Exercises'));
console.log(test('JavaScript-Exercises'));
console.log(test('javascript_exercises'));
console.log(test(12356));
