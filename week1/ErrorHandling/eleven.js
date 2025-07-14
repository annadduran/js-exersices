// Define a function named evaluate_Expression that takes a string expression (exp) as input
function evaluate_Expression(exp) {
  // Try block to evaluate the expression and handle potential errors
  try {
    // Evaluate the expression using the eval function
    const result = eval(exp);
    // Log the result to the console
    console.log('Result:', result);
  } catch (error) {
    // Catch block to handle errors
    // Check if the error is an instance of EvalError
    if (error instanceof EvalError) {
      // If the error is an EvalError, log the error message to the console
      console.log('EvalError:', error.message);
    } else {
      // If the error is not an EvalError, log the error message to the console
      console.log('Error:', error.message);
    }
  }
}

// Example:
// Call the evaluate_Expression function with a valid expression
evaluate_Expression('30 + 30'); // Valid expression
// Call the evaluate_Expression function with an invalid expression
evaluate_Expression('3 +'); // Invalid expression
