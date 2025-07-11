// Define a function named alphabet_order that takes a string parameter (str)
function alphabet_order(str) {
  // Split the string into an array of characters, sort the array, and join the characters back into a string
  return str.split('').sort().join('');
}
// Log the result of calling alphabet_order with the input string "webmaster" to the console
console.log(alphabet_order("webmaster"));
