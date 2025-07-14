// Define a function named count that takes two parameters: main_str (the main string) and sub_str (the substring to count)
function count(main_str, sub_str) 
{
    // Convert main_str and sub_str to strings if they are not already
    main_str += '';
    sub_str += '';

    // If sub_str is an empty string or undefined, return the length of main_str plus 1
    if (sub_str.length <= 0) 
    {
        return main_str.length + 1;
    }

    // Escape special characters in sub_str for use in regular expression
    subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Count the occurrences of sub_str in main_str using a regular expression and return the count
    return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
}

// Test the count function with sample input strings and log the results to the console
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox'));
