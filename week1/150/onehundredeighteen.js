// Function to check if 'y' lies within the range of 'x' and 'z'
function is_inrange(x, y, z) 
{
    return y >= x && y <= z; // Returns true if 'y' is between 'x' and 'z' (inclusive)
}

console.log(is_inrange(1,2,3));   // Output: true (2 is in the range between 1 and 3)
console.log(is_inrange(1,2,-3));  // Output: false (2 is not in the range between 1 and -3)
console.log(is_inrange(1.1,1.2,1.3)); // Output: true (1.2 is in the range between 1.1 and 1.3) 
