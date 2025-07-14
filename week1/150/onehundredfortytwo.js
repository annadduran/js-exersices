/**
 * Function to simplify a given path
 * @param {string} main_path - The main path to simplify
 * @returns {string} - Returns the simplified path
 */
function simplify_path(main_path) {
  // Splitting the path into parts
  var parts = main_path.split('/'),
    new_path = [], // Array to store the simplified path
    length = 0; // Variable to keep track of the length of the new path

  // Loop through each part of the path
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];

    // Conditions to handle special cases ('.', '..', '')
    if (part === '.' || part === '' || part === '..') {
      if (part === '..' && length > 0) {
        length--; // Move back one directory level
      }
      continue; // Skip to the next part
    }

    new_path[length++] = part; // Store the valid part in the new path array
  }

  // If the new path is empty, return the root path '/'
  if (length === 0) {
    return '/';
  }

  // Reconstructing the simplified path
  var result = '';
  for (var i = 0; i < length; i++) {
    result += '/' + new_path[i]; // Append parts of the new path separated by '/'
  }

  return result; // Return the simplified path
}

console.log(simplify_path("/home/var/./www/../html//sql/")); // Output: '/home/var/html/sql' 
