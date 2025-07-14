// Define a function named access_Variable that attempts to access an undefined variable
function access_Variable() {
  // Try block to attempt accessing the undefined variable and handle potential errors
  try {
    // Attempt to log the value of an undefined variable to the console
    console.log(undefinedVariable);
  } catch (error) {
    // Catch block to handle errors
    // Check if the error is an instance of ReferenceError
    if (error instanceof ReferenceError) {
      // If the error is a ReferenceError, log the error message to the console
      console.log('ReferenceError:', error.message);
    } else {
      // If the error is not a ReferenceError, log the error message to the console
      console.log('Error:', error.message);
    }
  }
}

// Example:
// Call the access_Variable function to demonstrate accessing an undefined variable
access_Variable();
