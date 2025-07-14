// Define a function named 'test' with a single parameter 'word'
const test = (word) => {
    // Check if the input word is an empty string
    if (word.length === 0) 
    {
    // Return a message if the input string is empty
    return 'String should not be empty!'
   }
    // Check if the input parameter 'word' is not a string
    if (typeof word !== 'string')
     {
       // Return a message if the input is not a string
       return 'It must be a string.'
     }
   // Use the spread operator to convert the string into an array of characters, then reduce it to count the occurrences of each character
   const char_ctr = [...word].reduce((obj, el) => {
    // If the character exists in the object, increment its count; otherwise, initialize it with a count of 1
    obj[el] = obj[el] ? obj[el] + 1 : 1
    return obj
  }, {})
  // Check if there are at most one character with an odd count (indicating the possibility of a palindrome)
  return Object.values(char_ctr).filter(count => count % 2 !== 0).length <= 1
}

// Test the 'test' function with different input strings and output the result
console.log(test("maamd"))  // true
console.log(test("civic"))  // true
console.log(test("IO"))     // false
console.log(test(12321))    // It must be a string.
