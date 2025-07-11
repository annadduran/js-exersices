 // Define a function named abbrev_name which takes a single parameter str1 representing a name string
abbrev_name = function (str1) {
    // Trim leading and trailing whitespace from the input string and split it into an array of substrings based on space (' ') delimiter
    var split_names = str1.trim().split(" ");
    // Check if the array contains more than one element (indicating both first name and last name are provided)
    if (split_names.length > 1) {
        // Return the abbreviation of the name in the format: first name followed by the first character of the last name and a period ('.')
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    // If only one name is provided, return the name as it is
    return split_names[0];
};
// Call the abbrev_name function with the input "Robin Singh" and log the result to the console
console.log(abbrev_name("Ana Duran"));
