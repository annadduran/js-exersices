// Define a function called case_insensitive_search which takes two parameters: str (the string to search within) and search_str (the string to search for)
function case_insensitive_search(str, search_str)
  {
    // Use a regular expression with the "i" flag to perform a case-insensitive search for search_str within str, and store the result in the variable result
    var result= str.search(new RegExp(search_str, "i"));
  
    // If the result is greater than 0 (indicating a match), return 'Matched'; otherwise, return 'Not Matched'
    if (result>0)
    return 'Matched';
    else
    return 'Not Matched';  
   }

// Call the case_insensitive_search function with different strings and search terms, and print the results to the console
console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));
