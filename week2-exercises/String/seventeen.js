// Define a function called string_chop, taking two parameters: str (the input string) and size (the size of each chunk).
string_chop =  function(str, size){
      // Check if the input string is null; if so, return an empty array.
      if (str == null) return [];
      // Convert the input string to a string if it's not already.
      str = String(str);
      // Convert the size parameter to an integer using the bitwise NOT operator.
      size = ~~size;
// Check if the size is greater than 0; if so, split the string into chunks of the specified size using a regular expression and return the result as an array.
return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
}
// Test the function with different input strings and sizes, and log the results to the console.
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
