// Function to check if rearranging elements of one array can make it equal to another array
function array_checking(arra1, arra2) {
  // Iterate through elements of arra1
  for (var i = 0; i < arra1.length; i++) {
    // Nested loop to swap elements and check permutations
    for (var j = i; j < arra1.length; j++) {
      // Initialize result and temporary variable
      var result = true,
        temp = arra1[i];

      // Swap elements
      arra1[i] = arra1[j];
      arra1[j] = temp;

      // Compare elements of the modified arra1 with arra2
      for (var k = 0; k < arra1.length; k++) {
        if (arra1[k] !== arra2[k]) {
          result = false;
          break;
        }
      }

      // If the arrays match, return true
      if (result) {
        return true;
      }

      // Restore the original order by swapping back elements
      arra1[j] = arra1[i];
      arra1[i] = temp;
    }
  }

  // If no match is found, return false
  return false;
}

// Example usage
console.log(array_checking([10, 20, 30], [10, 20, 30]));   // true
console.log(array_checking([10, 20, 30], [30, 10, 20]));   // true
console.log(array_checking([10, 20, 30, 40], [10, 30, 20, 40]));   // false
