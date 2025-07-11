// Function to calculate the sum of integers from 1 to num using bitwise operation
function int_sum(num) {
    var s_sum = 0; // Initialize the sum variable
    while (num > 0) { // Loop until num is greater than 0
        s_sum += num; // Add num to the sum
        num = Math.floor(num / 2); // Divide num by 2 using floor division
    }
    return s_sum; // Return the sum of integers from 1 to num
}

// Examples to calculate the sum of integers from 1 to the given number
console.log(int_sum(8));  
console.log(int_sum(9));  
console.log(int_sum(26)); 
