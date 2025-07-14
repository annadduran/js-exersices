// Assigning values to variables
var x = 0;
var y = -1;
var z = 4;

// Checking the conditions to determine the order of variables
if (x > y && x > z) { // x
    if (y > z) { //the middle
        console.log(x + ", " + y + ", " + z); // x , y, z
    } else {
        console.log(x + ", " + z + ", " + y); // x, z, y
    }
} else if (y > x && y > z) {   //y
    if (x > z) { //middle
        console.log(y + ", " + x + ", " + z); //y, x, z
    } else {
        console.log(y + ", " + z + ", " + x); // y, z, x
    }
} else if (z > x && z > y) {   // z
    if (x > y) {
        console.log(z + ", " + x + ", " + y); // z, x, y
    } else {
        console.log(z + ", " + y + ", " + x); //z, y , x
    }
} 
