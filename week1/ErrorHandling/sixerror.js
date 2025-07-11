// Define a function named validate_String_Not_Empty that takes one parameter: str
function validate_String_Not_Empty(str) {
  // Check if the length of the string is equal to 0
  if (str.length === 0) {
    // If the string is empty, throw an error indicating that the string is empty
    throw new Error('Sorry, the string is empty!');
  }
}

// Example:
try {
  // Create a string string1 with value 'Hello, World!'
  const string1 = 'Hello, World!';
  // Call the validate_String_Not_Empty function with string1 as an argument, which is a valid non-empty string
  validate_String_Not_Empty(string1); // Valid non-empty string

  // Create an empty string string2
  const string2 = '';
  // Call the validate_String_Not_Empty function with string2 as an argument, which is an empty string and will throw an error
  validate_String_Not_Empty(string2); // Throws an error
} catch (error) {
  // Catch and log any error that occurs during execution
  console.log('Error:', error.message);
}
