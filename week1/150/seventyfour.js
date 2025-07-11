// Define a function named all_max that takes an array of numbers as a parameter
function all_max(nums) 
{
    // Determine the maximum value between the first and third elements using a ternary operator
    var max_val = nums[0] > nums[2] ? nums[0] : nums[2];

    // Set all elements in the array to the determined maximum value
    nums[0] = max_val;
    nums[1] = max_val;
    nums[2] = max_val;

    // Return the modified array
    return nums;
}

// Call the function with sample arguments and log the results to the console
console.log(all_max([20, 30, 40]));   // Output: [40, 40, 40]
console.log(all_max([-7, -9, 0]));    // Output: [0, 0, 0]
console.log(all_max([12, 10, 3]));    // Output: [12, 12, 12] 
