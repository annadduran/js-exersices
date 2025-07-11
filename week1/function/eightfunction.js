// Define a function named test_prime that checks whether a given number n is a prime number
function test_prime(n) {

  // Check if the number is equal to 1, which is not a prime number
  if (n === 1) {
    return false;
  }
  // Check if the number is equal to 2, which is a prime number
  else if (n === 2) {
    return true;
  } else {
    // Iterate from 2 to n-1 to check for factors of n
    for (var x = 2; x < n; x++) {
      // If n is divisible by x without a remainder, it is not a prime number
      if (n % x === 0) {
        return false;
      }
    }
    // If no factors are found, the number is a prime number
    return true;  
  }
}

// Log the result of calling test_prime with the input number 37 to the console
console.log(test_prime(37));
