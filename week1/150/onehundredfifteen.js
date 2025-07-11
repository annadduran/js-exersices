// Function to check if a matrix is a diagonal matrix
const is_diagonal_matrix = (user_matrix) => {
    // Loop through each row of the matrix
    for (let i = 0; i < user_matrix.length; i++) {
        // Loop through each element in the row
        for (let j = 0; j < user_matrix.length; j++) {
            // Check if the element is non-zero when it's not on the diagonal (i !== j)
            if (i !== j && user_matrix[i][j] !== 0) 
              return false; // Return false if non-zero value is found off the diagonal
        }
    }
    return true; // Return true if all non-diagonal elements are zero
}

// Testing the function with sample matrix inputs
console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 0], [0, 0, 3]])); // Output: true (Diagonal matrix)
console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 3], [0, 0, 3]])); // Output: false (Non-diagonal elements present) 
