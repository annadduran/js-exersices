// Define a function named ascii_to_hexa that takes a string parameter str
function ascii_to_hexa(str)
{
    // Initialize an empty array to store the hexadecimal values
    var arr1 = [];
    
    // Iterate through each character in the input string
    for (var n = 0, l = str.length; n < l; n++)
    {
        // Convert the ASCII value of the current character to its hexadecimal representation
        var hex = Number(str.charCodeAt(n)).toString(16);
        
        // Push the hexadecimal value to the array
        arr1.push(hex);
    }
    
    // Join the hexadecimal values in the array to form a single string
    return arr1.join('');
}

// Call the ascii_to_hexa function with different input strings and log the results to the console
console.log(ascii_to_hexa('12'));
console.log(ascii_to_hexa('100'));
