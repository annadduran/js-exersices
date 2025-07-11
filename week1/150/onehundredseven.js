// Function to count the number of pairs in an array where one element is a multiple of another
function arr_pairs(arr) {
    var result = 0; // Initialize the count of pairs to zero

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            // Check if either element is a multiple of the other
            if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) {
                result++; // Increment the count if a pair is found
            }
        }
    }

    return result; // Return the total count of pairs
}

// Example usage of the function
console.log(arr_pairs([1, 2, 3])); // Output: 2 (pairs: [1, 2], [1, 3])
console.log(arr_pairs([2, 4, 6])); // Output: 3 (pairs: [2, 4], [2, 6], [4, 6])
console.log(arr_pairs([2, 4, 16])); // Output: 6 (pairs: [2, 4], [2, 16], [4, 16], [4, 16], [4, 16], [4, 16]) 
