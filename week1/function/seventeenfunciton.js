// Define a function named Char_Counts that counts the occurrences of each character in the input string
function Char_Counts(str1) {
  // Create an empty object uchars to store character counts
  var uchars = {};

  // Use the replace method to iterate through each non-whitespace character in the input string
  str1.replace(/\S/g, function(l) {
    // Check if the current character is already in the uchars object
    uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);
  });

  // Return the object containing character counts
  return uchars;
}

// Log the result of calling Char_Counts with the input string "The quick brown fox jumps over the lazy dog" to the console
console.log(Char_Counts("Taylor swift")); 