 // Define a function called humanize that converts a number into a human-readable ordinal representation.

function humanize(number) {
    // Check if the last two digits of the number fall between 11 and 13 (inclusive), as these exceptions follow a different ordinal rule.
    if (number % 100 >= 11 && number % 100 <= 13)
        return number + "th";
    
    // If the last digit of the number is 1, append "st". If it's 2, append "nd". If it's 3, append "rd".
    switch (number % 10) {
        case 1:
            return number + "st";
        case 2:
            return number + "nd";
        case 3:
            return number + "rd";
    }
    
    // If none of the special cases apply, append "th" to the number.
    return number + "th";
}

// Test the humanize function with different numbers and log the results to the console.
console.log(humanize(1));   // Output: "1st"
console.log(humanize(20));  // Output: "20th"
console.log(humanize(302)); // Output: "302nd"
