// Define a function named first_last_1 with a parameter nums
function first_last_1(nums)
{
  // Calculate the index of the last element in the array
  var end_pos = nums.length - 1;
  // Check if the first or last element in the array is equal to 1, and return the result
  return nums[0] == 1 || nums[end_pos] == 1;
}

// Call the function with sample arguments and log the results to the console
console.log(first_last_1([1, 3, 5]));
console.log(first_last_1([2, 3, 5, 1]));
console.log(first_last_1([2, 4, 6]));
