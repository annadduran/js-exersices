// Define a function named matrix that prints a square matrix with diagonal elements set to 1 and others to 0
function matrix(n) {
    // Initialize variables i and j for row and column indices
    var i;
    var j;

    // Iterate through each row
    for (i = 0; i < n; i++) {
        // Iterate through each column
        for (j = 0; j < n; j++) {
            // Check if the current position is on the diagonal (i equals j)
            if (i === j) {
                // Print 1 if on the diagonal
                console.log(' 1 ');
            } else {
                // Print 0 if not on the diagonal
                console.log(' 0 ');
            }
        }
        // Print a line of dashes to separate rows
        console.log('----------');
    }
}

// Call the matrix function with the parameter 4
matrix(4); 
