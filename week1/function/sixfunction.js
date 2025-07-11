// Define a function named find_longest_word that takes a string parameter (str)
function find_longest_word(str) {
  // Use a regular expression to match words in the input string and store them in an array (array1)
  var array1 = str.match(/\w[a-z]{0,}/gi);

  // Initialize a variable result with the first word from the array
  var result = array1[0];

  // Iterate through the array of words starting from the second word
  for (var x = 1; x < array1.length; x++) {
    // Check if the length of the current word is greater than the length of the current result
    if (result.length < array1[x].length) {
      // If true, update the result with the current word
      result = array1[x];
    } 
  }

  // Return the longest word found
  return result;
}

// Log the result of calling find_longest_word with the input string 'Web Development Tutorial' to the console
console.log(find_longest_word('The tortued poets departament'));
