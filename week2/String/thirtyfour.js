// Define a function named sentenceCase that takes a string str as input
function sentenceCase (str) {
  // Check if the input string is null or empty
  if ((str===null) || (str===''))
       return false;
  else
   // Convert the input string to a string type
   str = str.toString();

 // Replace each word in the string with its first letter capitalized and the rest in lowercase
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

// Call the sentenceCase function with a test string and log the result to the console
console.log(sentenceCase('PHP exercises. python exercises.'));
