// Define a function named unCapitalize_Words which takes a string str as input
function unCapitalize_Words(str)
{ 
  // Use the replace method with a regular expression /\w\S*/g to match words in the string
  // For each word matched, execute the callback function(txt) where txt is the matched word
  return str.replace(/\w\S*/g, 
    // Inside the callback function, convert the first character of the word to lowercase
    // and concatenate it with the rest of the word converted to lowercase
    function(txt)
       {
          return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase();
       });
}

// Call the unCapitalize_Words function with the input string 'Js String Exercises'
// and print the result to the console
console.log(unCapitalize_Words('Js String Exercises'));
