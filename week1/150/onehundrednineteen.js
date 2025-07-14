// Function to check if the digits of a number form an increasing sequence
function is_increasing_digits_Sequence(num) {
  var arr_num = ('' + num).split(''); // Convert the number to a string and split it into an array of digits

  // Loop through the array of digits
  for (var i = 0; i < arr_num.length - 1; i++) {
    // Check if the current digit is greater than or equal to the next digit
    if (parseInt(arr_num[i]) >= parseInt(arr_num[i + 1])) {
      return false; // If the sequence is not increasing, return false
    }
  }
  return true; // If the sequence is increasing, return true
}

// Test cases
console.log(is_increasing_digits_Sequence(123));    // Output: true (Each digit forms an increasing sequence)
console.log(is_increasing_digits_Sequence(1223));   // Output: false (Digits are not in strictly increasing order)
console.log(is_increasing_digits_Sequence(45677));  // Output: false (Digits are not in strictly increasing order)
