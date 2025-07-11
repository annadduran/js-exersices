// Define a function called repeat that takes a string str and an optional count parameter
repeat = function repeat(str, count) {
    // If count parameter is not provided, set it to 1
    if(typeof(count) == "undefined") {
    count =1;
  }
  // Return an empty string if count is less than 1, otherwise repeat the string count times
  return count < 1 ? '' : new Array(count + 1).join(str);
    }
// Test the repeat function with different inputs and print the results to the console
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',5));
