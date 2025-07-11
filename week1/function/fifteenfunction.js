// Define a function named exp that calculates the result of raising a base (b) to a power (n)
function exp(b, n) {
    // Initialize a variable ans to 1, which will store the result of the exponentiation
    var ans = 1;

    // Iterate from 1 to n (inclusive) to perform the exponentiation
    for (var i = 1; i <= n; i++) {
        // Multiply the current value of ans by the base (b)
        ans = b * ans;
    }

    // Return the final result of the exponentiation
    return ans;
}

// Log the result of calling exp with the base 2 and exponent 3 to the console
console.log(exp(2, 3)); 
