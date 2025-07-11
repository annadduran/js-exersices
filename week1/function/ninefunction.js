// Define a function named detect_data_type that determines the data type of the given value
function detect_data_type(value) {
  // Define an array of data types to check against: Function, RegExp, Number, String, Boolean, Object
  var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;

  // Check if the value is an object or a function
  if (typeof value === "object" || typeof value === "function") {
    // Iterate through the array of data types
    for (x = 0, len = dtypes.length; x < len; x++) {
      // If the value is an instance of the current data type, return the data type
      if (value instanceof dtypes[x]) {
        return dtypes[x];
      }
    }
  }

  // If the value is not an object or function, return its typeof value
  return typeof value;
}

// Log the result of calling detect_data_type with the input value 12 to the console
console.log(detect_data_type(12));

// Log the result of calling detect_data_type with the input value 'w3resource' to the console
console.log(detect_data_type('w3resource'));

// Log the result of calling detect_data_type with the input value false to the console
console.log(detect_data_type(false)); 
