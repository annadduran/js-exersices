/**
 * Function to sort an array of strings based on string length
 * @param {array} arra - The array of strings to be sorted
 * @returns {array} - The sorted array of strings
 */
function sort_by_string_length(arra) {
    // Loop through each element in the array
    for (var i = 0; i < arra.length; i++) {
        // Compare the current element with the subsequent elements
        for (var j = i + 1; j < arra.length; j++) {
            // If the length of the current element is greater than the subsequent element
            if (arra[i].length > arra[j].length) {
                var m = arra[i]; // Store the current element in a temporary variable
                arra[i] = arra[j]; // Swap the current element with the subsequent element
                arra[j] = m; // Place the temporary variable (previous value of current element) in the subsequent element
            }
        }
    }
    return arra; // Return the sorted array
}

var arra = ["xyz", "acd", "aa", "bb", "zzz", "", "a", "b"]; // Input array
console.log("Original array: " + arra + "\n"); // Display original array
console.log(sort_by_string_length(["xyz", "acd", "aa", "bb", "zzz", "", "a", "b"])); // Sort and display the array 
