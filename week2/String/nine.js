// Define a function named capitalize_Words that takes a string str as input
function capitalize_Words(str)
{
  // Use the replace method with a regular expression to match words (\w) followed by zero or more non-space characters (\S*)
  // For each matched word, use a callback function to capitalize the first character and convert the rest of the characters to lowercase
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
// Call the capitalize_Words function with the argument 'js string exercises' and output the result
console.log(capitalize_Words('the tortued poets departament'));
