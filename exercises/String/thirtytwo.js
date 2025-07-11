// Define a function named remove_non_ascii that takes a string parameter str
function remove_non_ascii(str) {
  // Check if the input string is null or empty. If true, return false.
  if ((str===null) || (str===''))
       return false;
  // Convert the input string to a string if it's not already
  else
    str = str.toString();
  
  // Use the replace method with a regular expression to remove non-ASCII characters
  // The regular expression /[^\x20-\x7E]/g matches any character that is not in the range of ASCII printable characters (hexadecimal values from 0x20 to 0x7E)
  return str.replace(/[^\x20-\x7E]/g, '');
}

// Call the remove_non_ascii function with a test string and log the result to the console
console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));
