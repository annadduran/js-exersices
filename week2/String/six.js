// Define a function called protect_email, which takes a user_email string as input
protect_email = function (user_email) {
    // Declare variables avg, splitted, part1, and part2
    var avg, splitted, part1, part2;
    // Split the user_email string into two parts using "@" as the delimiter and store them in the splitted array
    splitted = user_email.split("@");
    // Store the first part of the email in the part1 variable
    part1 = splitted[0];
    // Calculate the average length of the first part of the email
    avg = part1.length / 2;
    // Extract the substring of part1 from index 0 to (part1.length - avg) and store it back in part1
    part1 = part1.substring(0, (part1.length - avg));
    // Store the second part of the email in the part2 variable
    part2 = splitted[1];
    // Return a protected version of the email by concatenating part1, "...@", and part2
    return part1 + "...@" + part2;
};

// Call the protect_email function with the input "robin_singh@example.com" and log the result to the console
console.log(protect_email("robin_singh@example.com"));
