// Define a function named 'test' with a single parameter 'word'
const test = (word) => {
  // Check if the input parameter 'word' is not a string
  if (typeof word !== 'string')
  {
    // Return a message if the input is not a string
    return 'It must be a string.'
  }
  // Define a regular expression pattern to match words starting with an uppercase letter followed by zero or more letters (uppercase or lowercase)
  const pattern = /^[A-Z][A-Za-z]*$/
  // Test if the input word matches the defined pattern
  return pattern.test(word)
}

// Test the 'test' function with different input strings and output the result
console.log(test("XmlStream"))        // true
console.log(test("IOStream"))         // true
console.log(test("IEnumerable"))      // true
console.log(test("javascript"))       // false
console.log(test(12356))              // It must be a string. 
