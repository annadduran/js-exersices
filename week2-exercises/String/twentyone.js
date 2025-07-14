// Define a function named repeat_string that takes two parameters: string and count
function repeat_string(string, count) 
  {
    // Check if the string is null, count is negative, count is Infinity, or count is null
    if ((string == null) || (count < 0) || (count === Infinity) || (count == null))
      {
        // If any of the above conditions are true, return an error message
        return('Error in string or count.');
      }
    // Convert count to an integer by bitwise OR operation with 0 (floor count)
    count = count | 0; // Floor count.
    // Return a new string created by repeating the input string 'count' times
    return new Array(count + 1).join(string);
  }

// Test the repeat_string function with different arguments and log the results
console.log(repeat_string('a', 4)); // Repeat 'a' 4 times
console.log(repeat_string('a')); // Error due to missing count parameter
console.log(repeat_string('a', -2)); // Error due to negative count
console.log(repeat_string('a', Infinity)); // Error due to count being Infinity
