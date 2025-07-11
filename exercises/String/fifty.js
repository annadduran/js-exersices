// Define a function named test that takes an input parameter alpha_text
const test = (alpha_text) => {
  // Check if the input parameter is not a string, if so, return an error message
  if (typeof alpha_text !== 'string') {
    return 'It must be string';
  }

  // Remove non-alphanumeric characters and convert the string to lowercase
  const new_text = alpha_text.replace(/[^a-z0-9]+/ig, '').toLowerCase();

  // Calculate the middle index of the new string
  const mid_index = new_text.length >> 1;

  // Iterate through the first half of the new string
  for (let i = 0; i < mid_index; i++) {
    // Check if the character at the current index is not equal to its counterpart from the end
    if (new_text.at(i) !== new_text.at(~i)) {
      // If not equal, return false (indicating that the string is not a palindrome)
      return false;
    }
  }

  // If the loop completes without finding any unequal pairs, return true (indicating that the string is a palindrome)
  return true;
}

// Test the function with various inputs and print the results
console.log(test('$22_|1372^2731|_22'));
console.log(test('12%^&2'));
console.log(test('234%$$%432'));
console.log(test(1234));
console.log(test('aba%$aba'));
console.log(test('Aba%$aba'));
