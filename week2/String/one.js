// Define a function named is_string that takes an input parameter
is_string = function(input) {
  // Check if the type of input is a string by examining its internal [[Class]] property
  if (Object.prototype.toString.call(input) === '[object String]')
    // Return true if the input is a string
    return true;
  else
    // Return false if the input is not a string
    return false;   
    };
// Output the result of calling the is_string function with a string argument
console.log(is_string('w3resource'));
// Output the result of calling the is_string function with an array argument
console.log(is_string([1, 2, 4, 0]));
