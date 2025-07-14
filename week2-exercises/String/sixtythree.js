 // Define a function called 'test' with a parameter 'text'
const test = function(text) {
    // Check if the input 'text' is not a string, return a message
    if (typeof text !== 'string') {
        return 'It must be string'
    } 
    // Get the length of the input string 'text'
    const n = text.length
    // If the length of the string is 0, return the input string
    if (n==0) {
        return text
    }
    // Initialize a 2D array 'data' with dimensions 'n x n' filled with zeros
    const data = new Array(n).fill(0).map(item => new Array(n).fill(0).map(item => 0))
    // Set diagonal elements of 'data' to 1
    for (let i = 0; i < n; i++) {
        data[i][i] = 1
    }

    // Iterate through each character of the input string 'text'
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            // Calculate the column index
            const col = j + i
            // If the characters at indices 'j' and 'col' are equal
            if (text[j] === text[col]) {
                // Update 'data' with the length of the palindrome by adding 2 to the value of the previous diagonal element
                data[j][col] = 2 + data[j + 1][col - 1]
            } else {
                // Otherwise, update 'data' with the maximum value from the adjacent elements
                data[j][col] = Math.max(data[j][col - 1], data[j + 1][col])
            }
        }
    }
    // Return the length of the longest palindromic subsequence, which is stored at data[0][n - 1]
    return data[0][n - 1]
}

// Test the 'test' function with different input strings and output the result
console.log(test("aaaba"))    // Output: 4
console.log(test("maadaem"))  // Output: 5
console.log(test("zkksk"))    // Output: 3
console.log(test("ab"))       // Output: 1
console.log(test(""))         // Output: ""
