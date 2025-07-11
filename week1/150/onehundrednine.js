// Function to sort prime numbers up to 'num'
function sort_prime(num) {
  var prime_num1 = [], // Array to store prime numbers
      prime_num2 = []; // Array to track prime status (true/false)

  // Initialize prime_num2 array to true for all indices from 0 to num
  for (var i = 0; i <= num; i++) {
    prime_num2.push(true);
  }

  // Loop to find prime numbers using the Sieve of Eratosthenes algorithm
  for (var i = 2; i <= num; i++) {
    if (prime_num2[i]) {
      prime_num1.push(i); // Push the current number to prime_num1 if it's a prime

      // Mark multiples of the current number as non-prime in prime_num2
      for (var j = 1; i * j <= num; j++) {
        prime_num2[i * j] = false;
      }
    }
  }

  return prime_num1; // Return the array containing sorted prime numbers
}

// Example usage of the sort_prime function with different values
console.log(sort_prime(5)); // Output: [2, 3, 5]
console.log(sort_prime(11)); // Output: [2, 3, 5, 7, 11]
console.log(sort_prime(19)); // Output: [2, 3, 5, 7, 11, 13, 17, 19]
