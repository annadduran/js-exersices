// Function to find the longest string(s) in an array
function longest_string(str_ara) {
  var max = str_ara[0].length; // Initialize max length with the length of the first string
  str_ara.map(v => max = Math.max(max, v.length)); // Update max with the maximum length in the array using the map function
  result = str_ara.filter(v => v.length == max); // Filter out strings that have the maximum length
  return result; // Return the array of longest strings
}	

// Example usage
console.log(longest_string(['a', 'aa', 'aaa', 'aaaaa', 'aaaa']));  
