// Function to count the number of inversions in an array (naive approach)
function number_of_InversionsNaive(arr) {
    var ctr = 0; // Counter for inversions

    // Loop through the array elements
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            // If an inversion is found, increment the counter
            if (arr[i] > arr[j]) //if the fisrt number is greather than the second number , its a iversion
              ctr++;
        }
    }

    return ctr; // Return the count of inversions
}

// Test cases
console.log(number_of_InversionsNaive([0, 3, 2, 5, 9]));   // Output: 1
console.log(number_of_InversionsNaive([1, 5, 4, 3]));     // Output: 3
console.log(number_of_InversionsNaive([10, 30, 20, -10])); // Output: 4  
