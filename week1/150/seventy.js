// Define a function named rotate_elements_left with a parameter array
function rotate_elements_left(array)
{
    // Return a new array with elements rotated to the left
    // The new order is [array[1], array[2], array[0]]
    return [array[1], array[2], array[0]];
}

// Call the function with sample arguments and log the results to the console
console.log(rotate_elements_left([3, 4, 5]));
console.log(rotate_elements_left([0, -1, 2]));
console.log(rotate_elements_left([7, 6, 5])); 
