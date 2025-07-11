/**
 * Function to find the index of the rightmost round number (divisible by 10) in the array
 * @param {number[]} input_arr - The input array of numbers
 * @returns {number} - The index of the rightmost round number (if found)
 */
function find_rightmost_round_number(input_arr) {
  var result = 0; // Variable to store the index of the rightmost round number (default: 0)
  for (var i = 0; i < input_arr.length; i++) {
    if (input_arr[i] % 10 === 0) { // Checking if the number is divisible by 10
      result = i; // Updating 'result' with the current index if the number is divisible by 10
    }
  }
  return result; // Returning the index of the rightmost round number
}

console.log(find_rightmost_round_number([1, 22, 30, 54, 56]));  
console.log(find_rightmost_round_number([1, 22, 32, 54, 56]));  
console.log(find_rightmost_round_number([1, 22, 32, 54, 50]));   
