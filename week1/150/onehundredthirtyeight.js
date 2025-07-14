/**
 * Function to reverse the binary representation of a 16-bit number
 * @param {number} num - The input number
 * @returns {number} - The reversed binary number
 */	
function sixteen_bits_reverse(num) {
    var result = 0; // Initialize result to store the reversed number
    for (var i = 0; i < 16; i++) {
        result = result * 2 + (num % 2); // Reversing the bits by shifting result left and adding the last bit of 'num'
        num = Math.floor(num / 2); // Right-shifting 'num' to access the next bit
    }
    return result; // Return the reversed 16-bit number
}

console.log(sixteen_bits_reverse(12345));  
console.log(sixteen_bits_reverse(10));   
console.log(sixteen_bits_reverse(5));    
