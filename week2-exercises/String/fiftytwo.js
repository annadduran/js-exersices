  /**
 * Source: shorturl.at/asFM4
 * @function test
 * @param {string} text
 * @returns {boolean}
 */
const test = (word) => {
    // Check if the input is a string
    if (typeof word !== 'string') {
        return 'It must be string';
    }

    // Convert the word to uppercase and remove non-alphabetic characters
    const upperChars = word.toUpperCase().replace(/[^A-Z]/g, '');

    // Initialize an array to store the differences between adjacent characters
    const adjacentDiffList = [];

    // Iterate through the characters of the word
    for (let i = 0; i < upperChars.length - 1; i++) {
        // Get the current character and the adjacent character
        const { [i]: char, [i + 1]: adjacentChar } = upperChars;

        // Calculate the difference in ASCII values between adjacent characters
        if (char !== adjacentChar) {
            adjacentDiffList.push(
                Math.abs(char.charCodeAt() - adjacentChar.charCodeAt())
            );
        }
    }

    // Check if the adjacent differences are in non-decreasing order
    for (let i = 0; i < adjacentDiffList.length - 1; i++) {
        const { [i]: charDiff, [i + 1]: secondCharDiff } = adjacentDiffList;

        // If the adjacent differences are not in non-decreasing order, return false
        if (charDiff > secondCharDiff) {
            return false;
        }
    }
    // If all adjacent differences are in non-decreasing order, return true
    return true;
};

// Test cases
console.log(test('acgl'));   // Output: true
console.log(test('aebc'));   // Output: false
console.log(test(12356));    // Output: "It must be string"
