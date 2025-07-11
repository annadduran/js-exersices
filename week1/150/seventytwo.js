// Define a function named first_last_same with a parameter nums
function first_last_same(nums) {
    // Calculate the index of the last element in the array
    var end = nums.length - 1;

    // Check if the array has at least one element
    if (nums.length >= 1) {
        // Return true if the first and last elements of the array are equal, otherwise return false
        return nums[0] == nums[end];
    } else {
        // Return false if the array is empty
        return false;
    }
}

// Call the function with sample arguments and log the results to the console
console.log(first_last_same([10, 20, 30])); 
console.log(first_last_same([10, 20, 30, 10])); 
console.log(first_last_same([20, 20, 20])); 
