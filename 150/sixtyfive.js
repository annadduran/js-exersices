// Define a function named end_script with parameter str
function end_script(str) {
  // Check if the last 6 characters of str are equal to 'Script'
  if (str.substring(str.length - 6, str.length) == 'Script') {
    // Return true if the condition is met
    return true;
  } else {
    // Return false if the condition is not met
    return false;
  }
}

// Call the function with sample arguments and log the results to the console
console.log(end_script("JavaScript"));
console.log(end_script("Java Script"));
console.log(end_script("Java Scripts"));
