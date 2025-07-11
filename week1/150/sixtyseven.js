// Define a function named nop with parameter str
function nop(str) {
  // Initialize start_pos variable to 0
  let start_pos = 0;
  // Initialize end_pos variable to the length of the input string
  let end_pos = str.length;

  // Check if the string has a length greater than 0 and the first character is 'P'
  if (str.length > 0 && str.charAt(0) == 'P') { 
    // If true, set start_pos to 1
    start_pos = 1; 
  }

  // Check if the string has a length greater than 1 and the last character is 'P'
  if (str.length > 1 && str.charAt(str.length - 1) == 'P') {
    // If true, decrement end_pos by 1
    end_pos--;
  }

  // Return a substring of the input string from start_pos to end_pos
  return str.substring(start_pos, end_pos);
}

// Call the function with sample arguments and log the results to the console
console.log(nop("PythonP"));
console.log(nop("Python"));
console.log(nop("JavaScript")); 
