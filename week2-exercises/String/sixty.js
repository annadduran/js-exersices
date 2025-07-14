// Define a function named 'test' with a single parameter 'text'
function test(text) {
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
   // Create an empty array to store words
   var words = [];
  // Split the input text into an array of words using whitespace as the delimiter
  words = text.match(/\S+/g);
  // Create an empty string to store the reversed words
  var reverse_word = "";
  // Iterate through each word in the 'words' array
  for (var i = 0; i < words.length; i++) {
     // Reverse each word, join the characters, and add it to the 'reverse_word' string
     reverse_word += words[i].split('').reverse().join('') + " ";
  }
  // Return the string with reversed words
  return reverse_word
}
// Test the 'test' function with different input strings and output the result
console.log(test("abc"))  // 'cba'
console.log(test("JavaScript Exercises"))  // 'tpircsexE scirpSavaJ'
console.log(test(1234))  // It must be a string.
