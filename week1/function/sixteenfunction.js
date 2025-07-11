// Define a function named unique_char that returns a string containing unique characters from the input string
function unique_char(str1) {
  // Create a variable str and initialize it with the input string
  var str = str1;

  // Create an empty string uniql to store unique characters
  var uniql = "";

  // Iterate through each character in the input string
  for (var x = 0; x < str.length; x++) {
    // Check if the current character is not already in the uniql string
    if (uniql.indexOf(str.charAt(x)) == -1) {
      // If true, append the current character to the uniql string
      uniql += str[x];
    }
  }

  // Return the string containing unique characters
  return uniql;
}

// Log the result of calling unique_char with the input string "thequickbrownfoxjumpsoverthelazydog" to the console
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog")); 
console.log(unique_char("banana")); 
console.log(unique_char("nochejaja")); 
