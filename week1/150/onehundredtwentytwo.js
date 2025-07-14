// Function to check if a sequence of numbers is monotonous
function is_monotonous(num) {
    // If the sequence has only one element, it's considered monotonous
    if (num.length === 1) {
        return true;
    }

    // Calculate the direction of the sequence
    var num_direction = num[1] - num[0];

    // Check for non-monotonic behavior
    for (var i = 0; i < num.length - 1; i++) {
        // If the product of direction and the difference between elements is not positive, it's non-monotonic
        if (num_direction * (num[i + 1] - num[i]) <= 0) {
            return false;
        }
    }
    // If the loop completes, the sequence is monotonic
    return true;
}

// Test cases
console.log(is_monotonous([1, 2, 3]));    // Output: true (Monotonously increasing)
console.log(is_monotonous([1, 2, 2]));    // Output: false (Not strictly increasing)
console.log(is_monotonous([-3, -2, -1])); // Output: true (Monotonously increasing) 
