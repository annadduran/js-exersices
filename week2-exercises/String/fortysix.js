 // Define a function called startsWith that takes two parameters: input (a string) and string (another string).
function startsWith(input, string) {
  // Check if the index of the second string within the first string is 0, indicating that the first string starts with the second string.
  return input.indexOf(string) === 0;
}
// Test the startsWith function by calling it with two strings and logging the result to the console.
console.log(startsWith('js string exercises', 'js'));
