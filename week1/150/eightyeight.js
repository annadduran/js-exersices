// Function to check if two numbers are both divisible or not divisible by a given divisor
function checking_numbers(x, y, divisor) {
  // Check if both x and y are divisible by the divisor or not divisible by the divisor
  if (x % divisor === 0 && y % divisor === 0 || x % divisor !== 0 && y % divisor !== 0) {
    return true; // Return true if the condition is satisfied
  }
  return false; // Return false if the condition is not satisfied
}

// Example usage
console.log(checking_numbers(10, 25, 5)); // true
console.log(checking_numbers(10, 20, 5)); // true
console.log(checking_numbers(10, 20, 4)); // false 
