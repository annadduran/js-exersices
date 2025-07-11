// Define a function named search_word taking two parameters: text (the text to search within) and word (the word to search for)
function search_word(text, word){
    // Initialize variables x and y to track occurrences of the word
    var x = 0, y=0;
   
    // Loop through the characters of the text string
    for (i=0;i< text.length;i++)
        {
        // Check if the current character matches the first character of the word
        if(text[i] == word[0])
            {
            // If a potential match is found, iterate through the characters of the word
            for(j=i;j< i+word.length;j++)
               {
                // Check if the characters of the text match the characters of the word
                if(text[j]==word[j-i])
                  {
                    // Increment y if a match is found
                    y++;
                  }
                // If all characters of the word match consecutively, increment x
                if (y==word.length){
                    x++;
                }
            }
            // Reset y for the next potential match
            y=0;
        }
    }
   // Return the result indicating how many times the word was found in the text
   return "'"+word+"' was found "+x+" times.";
}

// Demonstrate the usage of the search_word function with two example inputs and log the results to the console
console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
console.log(search_word('The tortued poets departament', 'poets'));
