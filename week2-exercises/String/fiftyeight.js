// Define a function named 'test' with a single parameter 'str'
const test = (str) => { 
   // Check if the input string is empty
   if (str.length === 0) 
    {
    // Return a message if the input string is empty
    return 'String should not be empty!'
   }
    // Check if the input parameter 'str' is not a string
    if (typeof str !== 'string')
     {
       // Return a message if the input is not a string
       return 'It must be a string.'
     }
  // Create a Map to store the occurrences of each character in the string
  const occurrence_Map = new Map()

  // Iterate through each character in the string
  for (const char of str) 
    {
      // Increment the occurrence count of the current character in the Map, or set it to 1 if it doesn't exist
      occurrence_Map.set(char, occurrence_Map.get(char) + 1 || 1)
    }

  // Find the character with the maximum occurrence count in the occurrence Map
  let max_char = { char: '', occur: -Infinity }

  for (const [char, occur] of occurrence_Map) {
    // Update max_char if the occurrence of the current character is greater than the current maximum occurrence
    if (occur > max_char.occur) {
      max_char = { char,occur }
    }
  }

  // Return the character with the maximum occurrence count
  return max_char.char
}
// Test the 'test' function with different input strings and output the result
console.log(test("Madam"))          // 'a'
console.log(test("civic"))          // 'c'
console.log(test("HellloL223LLL"))  // 'L'
console.log(test(12321))            // It must be a string.
