// Define a function named text_truncate that takes three parameters: str (the input string), length (the maximum length of the output string), and ending (the optional ending to append if the string is truncated)
text_truncate = function(str, length, ending) {
    // If the length parameter is not provided, set it to 100 characters
    if (length == null) {
      length = 100;
    }
    // If the ending parameter is not provided, set it to '...'
    if (ending == null) {
      ending = '...';
    }
    // Check if the length of the input string exceeds the specified length
    if (str.length > length) {
      // If yes, truncate the string to length - ending.length characters and append the ending
      return str.substring(0, length - ending.length) + ending;
    } else {
      // If no, return the original string
      return str;
    }
  };
// Test the function with different input strings and output the results to the console
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
