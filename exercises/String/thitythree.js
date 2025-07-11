// Define a function named remove_non_word which takes a string parameter str
function remove_non_word (str) {
    // Check if the input string is null or empty
    if ((str===null) || (str===''))
       // If the input string is null or empty, return false
       return false;
    else
       // If the input string is not null or empty, convert it to a string type
       str = str.toString();
  
    // Define a regular expression pattern to match non-word characters
    var PATTERN = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;
  
    // Use the replace method with the defined pattern to remove non-word characters from the string
    return str.replace(PATTERN, '');
}

// Call the remove_non_word function with a test string and log the result to the console
console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));
