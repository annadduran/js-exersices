// Function checks if the array 'nums' contains either 1 or 3
function contains13(nums) {
    // Check if 1 is present at any index or 3 is present at any index
    if (nums.indexOf(1) !== -1 || nums.indexOf(3) !== -1) {
        // Return true if either 1 or 3 is found
        return true;
    } else {
        // Return false if neither 1 nor 3 is found
        return false;
    }
}

// Example usage of the contains13 function
console.log(contains13([1, 5]));    // Should return true, as 1 is present
console.log(contains13([2, 3]));    // Should return true, as 3 is present
console.log(contains13([7, 5]));    // Should return false, as neither 1 nor 3 is present 
