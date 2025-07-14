// Function to find and print three-digit Armstrong numbers
function three_digit_armstrong_number() {
    for (var i = 1; i < 10; ++i) {
        for (var j = 0; j < 10; ++j) {
            for (var k = 0; k < 10; ++k) {
                // Calculate the cube of each digit and sum them
                var pow = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3);
                // Calculate the number formed by the digits
                var plus = i * 100 + j * 10 + k;

                // Check if the sum of cubes is equal to the number
                if (pow === plus) {
                    console.log(pow);
                }
            }
        }
    }
}

// Call the function to find three-digit Armstrong numbers
three_digit_armstrong_number(); 
