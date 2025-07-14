// Function to perform logical NOR operation
function test_logical_Nor(a, b) {
  return (!a && !b); // Returns true only if both a and b are false
}

// Testing logical NOR operation with different input values
console.log(test_logical_Nor(true, false));  // Output: false (logical NOR of true and false is false)
console.log(test_logical_Nor(false, false)); // Output: true (logical NOR of false and false is true)
console.log(test_logical_Nor(true, true));   // Output: false (logical NOR of true and true is false) 
