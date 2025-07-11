// Define a function named reverse_a_number that takes a parameter n
function reverse_a_number(n)
{
    // Convert the input number to a string
    n = n + "";

    // Split the string into an array of characters, reverse the array, and then join the characters back into a string
    return n.split("").reverse().join("");
}

// Convert the reversed string back to a number and log it to the console
console.log(Number(reverse_a_number(32243)));
