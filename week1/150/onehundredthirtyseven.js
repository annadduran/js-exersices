/**
 * Function to increment 'num' until it reaches or exceeds 15
 * @param {number} num - The input number
 * @returns {number} - The updated number (num >= 15)
 */
function test_fifteen(num) {
    while (num < 15) { // Loop continues until 'num' reaches or exceeds 15
        num++; // Increment 'num' by 1
    }
    return num; // Return the updated 'num'
}

console.log(test_fifteen("123")); // Output: 123 (input not converted to a number)
console.log(test_fifteen("10")); // Output: 15 (input incremented until 15)
console.log(test_fifteen("5")); // Output: 15 (input incremented until 15)
