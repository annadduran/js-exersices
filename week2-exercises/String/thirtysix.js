// Define a function named zeroFill with three parameters: number, width, and osign
function zeroFill(number, width, osign) {
    // Convert the absolute value of the number to a string and store it in the variable num
    var num = '' + Math.abs(number),
        // Calculate the number of zeros to be added to the left based on the specified width
        zerosw = width - num.length,
        // Determine if the number is positive
        sign = number >= 0;
    // Construct and return the zero-filled string
    return (sign ? (osign ? '+' : '') : '-') +
        // Append zeros to the left of the number using exponential notation and substring
        Math.pow(10, Math.max(0, zerosw)).toString().substr(1) + num;
}

// Test the zeroFill function with different arguments and output the result
console.log(zeroFill(120, 5, '-')); // Output: "--120"
console.log(zeroFill(29, 4)); // Output: "0029"
