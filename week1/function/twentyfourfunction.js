// Define a function named bubble_Sort that implements the bubble sort algorithm on an array
function bubble_Sort(a) {
    // Initialize variables for swapping (swapp), the array length (n), and a copy of the array (x)
    var swapp;
    var n = a.length - 1;
    var x = a;

    // Use a do-while loop to repeatedly iterate through the array until no swaps are needed
    do {
        // Set swapp to false at the beginning of each iteration
        swapp = false;

        // Iterate through the array using a for loop
        for (var i = 0; i < n; i++) {
            // Check if the current element is less than the next element
            if (x[i] < x[i + 1]) {
                // If true, perform a swap of the elements
                var temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                // Set swapp to true to indicate that a swap has occurred
                swapp = true;
            }
        }

        // Decrement the array length for the next iteration
        n--;
    } while (swapp); // Continue the loop if at least one swap occurred in the previous iteration

    // Return the sorted array
    return x;
}

// Log the result of calling bubble_Sort with the input array to the console
console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])); 
