// Define a function named find_FirstNotRepeatedChar that finds the first non-repeated character in a given string
function find_FirstNotRepeatedChar(str) {
  // Convert the input string into an array of characters
  var arra1 = str.split('');
  
  // Initialize variables result and ctr for storing the result and counting character occurrences
  var result = '';
  var ctr = 0;
 
  // Iterate through each character in the array
  for (var x = 0; x < arra1.length; x++) {
    // Reset the counter (ctr) for each character
    ctr = 0;
 
    // Iterate through the array again to count occurrences of the current character
    for (var y = 0; y < arra1.length; y++) {
      // Check if the current character is equal to the character at position y
      if (arra1[x] === arra1[y]) {
        // If true, increment the counter (ctr)
        ctr += 1;
      }
    }
 
    // Check if the counter (ctr) is less than 2 (character occurs only once)
    if (ctr < 2) {
      // If true, assign the current character to the result and break out of the loop
      result = arra1[x];
      break;
    }
  }
  
  // Return the first non-repeated character found
  return result;
}

// Log the result of calling find_FirstNotRepeatedChar with the input string 'abacddbec' to the console
console.log(find_FirstNotRepeatedChar('abacddbec')); 
