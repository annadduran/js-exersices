// Check if the input string is a correct sentence based on certain conditions
function is_correct_Sentence(input_str) {
    var first_char = input_str[0]; // Get the first character of the string
    var last_char = input_str[input_str.length - 1]; // Get the last character of the string
    return /[A-Z]/.test(first_char) && last_char == "."; // Check if the first character is an uppercase letter and the last character is a period.
}

// Examples of checking correct sentences using the function
console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts.")); // Output: true (It's a correct sentence)
console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts")); // Output: false (Missing period at the end)
console.log(is_correct_Sentence("this tool will help you write better English and efficiently corrects texts.")); // Output: false (First letter should be capitalized)
