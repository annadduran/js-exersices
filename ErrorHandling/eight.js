// Define a function named divide_Numbers that takes two parameters: x and y
function divide_Numbers(x, y) {
  // Attempt to perform division operation
  try {
    // Check if both x and y are numbers
    if (typeof x !== 'number' || typeof y !== 'number') {
      // If either x or y is not a number, throw a TypeError
      throw new TypeError('Invalid arguments. Both arguments should be numbers.');
    }
  
    // Check if y is zero
    if (y === 0) {
      // If y is zero, throw an Error indicating division by zero is not allowed
      throw new Error('Invalid divisor. Cannot divide by zero.');
    }
  
    // Perform division operation
    const result = x / y;
    // Log the result of division to the console
    console.log('Result:', result);
  } catch (error) {
    // If an error occurs during execution
    // Check if the error is a TypeError
    if (error instanceof TypeError) {
      // If the error is a TypeError, log the error message with 'TypeError' prefix
      console.log('TypeError:', error.message);
    } else {
      // If the error is not a TypeError, log the error message with 'Error' prefix
      console.log('Error:', error.message);
    }
  }
}

// Example:
// Call the divide_Numbers function with 20 and '4', where '4' is a string instead of a number
divide_Numbers(20, '4'); // Invalid divisor
// Call the divide_Numbers function with 20 and 4, which is a valid division operation
divide_Numbers(20, 4);  //  Valid division
// Call the divide_Numbers function with 20 and 0, which results in division by zero
divide_Numbers(20, 0); // Division by zero
