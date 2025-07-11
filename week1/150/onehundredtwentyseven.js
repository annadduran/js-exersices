// Function to mirror bits of a given number
function mirror_bits(n) {
    // Convert number to binary and split into array of bits
    let t = n.toString(2).split("");
	
    // Get the length of the binary string
    let str_len = t.length;

    // Add leading zeroes to make the length of the binary string 8
    for (let i = 0; i < 8 - str_len; i++) {
        t.unshift("0");
    }

    // Reverse the bits and convert the binary string back to a number
    return parseInt(t.reverse().join(""), 2);
}

// Test cases with comments showing the step-by-step process
// 14 -> 00001110 -> 01110000 -> 112
console.log(mirror_bits(14));
// 56 -> 00111000 -> 00011100 -> 28
console.log(mirror_bits(56));
// 234 -> 11101010 -> 01010111 -> 87
console.log(mirror_bits(234));
