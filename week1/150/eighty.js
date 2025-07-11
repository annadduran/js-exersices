// Function to swap the first and last elements of an array
function swap(arra) {
    // Destructuring assignment to swap values without using a temporary variable
    [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
    // Return the modified array
    return arra;
}

// Example usage
console.log(swap([1, 2, 3, 4]));
console.log(swap([0, 2, 1]));
console.log(swap([3])); 
