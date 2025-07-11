// Define a function named divide_Numbers that takes two parameters: x and y
function divide_Numbers(x, y) {
  // Try block to handle potential errors
  try {
    // Check if x and y are both numbers
    if (typeof x !== 'number' || typeof y !== 'number') {
      // If either x or y is not a number, throw a TypeError
      throw new TypeError('Invalid arguments. Both arguments should be numbers.');
    }
    // Check if y is zero
    if (y === 0) {
      // If y is zero, throw an Error indicating division by zero is not allowed
      throw new Error('Invalid divisor. Cannot divide by zero.');
    }
    // Calculate the result of the division
    const result = x / y;
    // Log the result to the console
    console.log('Result:', result);
  } catch (error) {
    // If an error occurs during execution, log the error message to the console
    console.log('Error:', error.message);
  } finally {
    // Finally block to execute cleanup code regardless of whether an error occurred or not
    console.log('Cleanup code executed.');
  }
}

// Example:
// Call the divide_Numbers function with valid arguments
divide_Numbers(10, 2);  //  Valid division
// Call the divide_Numbers function with a divisor of zero
divide_Numbers(10, 0); // Division by zero
// Call the divide_Numbers function with a non-numeric divisor
divide_Numbers(10, '2'); // Invalid divisor
