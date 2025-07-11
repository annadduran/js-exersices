// Function to count even numbers before the given number in the array
function find_numbers(arr_num, num) {
    var result = 0; // Counter variable to store the count of even numbers
    for (var i = 0; i < arr_num.length; i++) {
        if (arr_num[i] % 2 === 0 && arr_num[i] !== num) { // Check if number is even and not equal to 'num'
            result++; // Increment the counter for each even number
        }
        if (arr_num[i] === num) { // Check if the current number matches 'num'
            return result; // Return the count of even numbers encountered so far
        }
    }
    return -1; // Return -1 if 'num' is not found in the array
}

// Example usage of the function
console.log(find_numbers([1, 2, 3, 4, 5, 6, 7, 8], 5));  
console.log(find_numbers([1, 3, 5, 6, 7, 8], 6)); 
