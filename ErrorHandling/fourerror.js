// Define a function named validate_Positive_Number that takes one parameter: n
function validate_Positive_Number(n) {
  // Check if n is less than 0
  if (n < 0) {
    // If n is negative, throw an error indicating negative numbers are not allowed
    throw new Error('Error: Negative numbers are not allowed.');
  }
  // If n is not negative, return n
  return n;
}

// Call the validate_Positive_Number function with argument 3 and log the result to the console
console.log(validate_Positive_Number(3));
// Call the validate_Positive_Number function with argument -5, which will throw an error, and handle it
console.log(validate_Positive_Number(-5));
