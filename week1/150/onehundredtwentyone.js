// Function to check if a matrix is a lower triangular matrix
function lower_triangular_matrix(user_matrix) {
    for (var i = 0; i < user_matrix.length; i++) {
        for (var j = 0; j < user_matrix[0].length; j++) {
            // If element is above the main diagonal and not equal to zero, return false
            if (j > i && user_matrix[i][j] !== 0) {
                return false;
            }	
        }
    }
    return true; // Matrix is lower triangular
}

// Test cases
console.log(lower_triangular_matrix([[1, 0, 0],[2, 0, 0], [0, 3, 3]])); // Output: true (Lower triangular matrix)
console.log(lower_triangular_matrix([[1, 0, 1],[2, 0, 0], [0, 3, 3]])); // Output: false (Not a lower triangular matrix)
