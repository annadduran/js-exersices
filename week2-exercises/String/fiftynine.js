// Define a function named 'test' with a single parameter 'text'
const test = (text) => { 
   // Check if the input string is empty
   if (text.length === 0) 
    {
    // Return a message if the input string is empty
    return 'String should not be empty!'
   }
    // Check if the input parameter 'text' is not a string
    if (typeof text !== 'string')
     {
       // Return a message if the input is not a string
       return 'It must be a string.'
     }
   // Split the input text into an array of words using space as the delimiter
   const data = text.split(' ')
  // If there's only one word in the text, return that word
  if (data.length < 2) {
    return data[0]
  }
   // Split the input text into an array of words using space as the delimiter
   const words = text.split(' ')
  // If there's only one word in the text, return that word
  if (words.length < 2) {
    return words[0]
  }
  // Create an empty object to store word frequencies
  const temp = {}
  // Iterate through each word in the array of words
  words.forEach(word => {
    // Convert each word to lowercase and increment its frequency in the 'temp' object
    temp[word.toLocaleLowerCase()] = temp[word.toLocaleLowerCase()] + 1 || 1
  })
  // Find the word with the maximum frequency in the 'temp' object
  const max = Object.keys(temp).reduce((n, word) => {
    // If the frequency of the current word is greater than the maximum frequency seen so far, update 'max'
    if (temp[word] > n.count) 
    { 
      return { word, count: temp[word] } 
    } 
    else 
    { 
      return n 
    }
  }, { word: '', count: 0 })
  // Return the word with the maximum frequency
  return max.word
}
// Test the 'test' function with different input strings and output the result
console.log(test("The quick brown fox jumps over the lazy dog"))  // 'the'
console.log(test("Python is a high-level, general-purpose programming language."))  // 'a'
console.log(test(" It was the same man, she was sure of it. It's always the same, Chauncey."))  // 'the'
console.log(test(12321))  // It must be a string.
