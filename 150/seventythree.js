// Define a function named reverse3 that takes an array as a parameter
function reverse3(array) {
    // Use the map method to iterate over the array and reverse the order
    return array.map((element, idx, arr) => arr[(arr.length - 1) - idx]);
}

// Call the function with sample arguments and log the results to the console
console.log(reverse3([5, 4, 3]));  // Output: [3, 4, 5]
console.log(reverse3([1, 0, -1]));  // Output: [-1, 0, 1]
console.log(reverse3([2, 3, 1]));   // Output: [1, 3, 2] 
