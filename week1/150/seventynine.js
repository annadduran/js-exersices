// Function to check if the first two elements of an array are either both 30 or both 40
function twice3040(arra1) {
    let a = arra1[0], // Extract the first element
        b = arra1[1]; // Extract the second element
    return (a === 30 && b === 30) || (a === 40 && b === 40); // Check if both are 30 or both are 40
}	

// Example usage
console.log(twice3040([30, 30])); // Should return true
console.log(twice3040([40, 40])); // Should return true
console.log(twice3040([20, 20])); // Should return false
console.log(twice3040([30])); // Should return false
