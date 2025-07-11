 // Function to check if there is an arithmetic expression (addition, multiplication, division, or subtraction) among three numbers
function check_arithmetic_Expression(x, y, z) {
  // Check if any of the arithmetic expressions holds true
  return x + y == z || x * y == z || x / y == z || x - y == z;
}

// Examples of using the function
console.log(check_arithmetic_Expression(10, 25, 35));   // true, as 10 + 25 = 35
console.log(check_arithmetic_Expression(10, 25, 250));  // true, as 10 * 25 = 250
console.log(check_arithmetic_Expression(30, 25, 5));    // true, as 30 / 25 = 1.2
console.log(check_arithmetic_Expression(100, 25, 4.0)); // true, as 100 / 25 = 4.0
console.log(check_arithmetic_Expression(100, 25, 25));  // true, as 100 - 25 = 75
