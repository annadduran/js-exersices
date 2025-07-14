 // Define a function named vowel_count that takes a string parameter (str1)
function vowel_count(str1) {
  // Define a string containing all the vowels in both lowercase and uppercase
  var vowel_list = 'aeiouAEIOU';

  // Initialize a variable vcount to count the number of vowels
  var vcount = 0;

  // Iterate through each character in the input string
  for (var x = 0; x < str1.length; x++) {
    // Check if the current character is a vowel by searching for it in the vowel_list
    if (vowel_list.indexOf(str1[x]) !== -1) {
      // If the character is a vowel, increment the vowel count
      vcount += 1;
    }
  }

  // Return the total count of vowels in the input string
  return vcount;
}

// Log the result of calling vowel_count with the input string 'The quick brown fox' to the console
console.log(vowel_count("The tortued poets departament")); 
