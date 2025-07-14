// Define a function named string_parameterize that takes a string str1 as input
string_parameterize = function (str1) {
    // Trim leading and trailing whitespace, convert to lowercase, and replace non-alphanumeric characters with an empty string
    return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
};
// Output the result of calling the string_parameterize function with the input "Robin Singh from USA."
console.log(string_parameterize("Robin Singh from USA."));
