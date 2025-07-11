// Function that returns an array containing the first and last elements of the input array
function started(nums) {
    var array1 = []; // Create an empty array to store the first and last elements
    array1.push(nums[0], nums[nums.length - 1]); // Add the first and last elements to the array
    return array1; // Return the array with the first and last elements
}
// Example usage of the started function with different input arrays
console.log(started([20, 20, 30])); // Output: [20, 30]
console.log(started([5, 2, 7, 8])); // Output: [5, 8]
console.log(started([17, 12, 34, 78])); // Output: [17, 78]
