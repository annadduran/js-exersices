// Define a function called remove_first_occurrence which takes two parameters: str (the main string) and searchstr (the substring to be removed)
function remove_first_occurrence(str, searchstr) {
    // Find the index of the first occurrence of searchstr within str
    var index = str.indexOf(searchstr);
    // If searchstr is not found in str, return str as it is
    if (index === -1) {
        return str;
    }
    // If searchstr is found in str, return a new string that concatenates the substring before the first occurrence of searchstr with the substring after searchstr
    return str.slice(0, index) + str.slice(index + searchstr.length);
}

// Call the remove_first_occurrence function with a sample input and log the result to the console
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
console.log(remove_first_occurrence("Taylor Swift released Taylor's Version of 1989 and fans loved it", 'Taylor'));
