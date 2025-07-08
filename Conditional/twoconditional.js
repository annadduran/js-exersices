// Assigning values to variables
var x = 3;
var y = -7;
var z = 2;

// Checking different conditions based on the signs of x, y, and z
//all positives
if (x > 0 && y > 0 && z > 0) {
  alert("The sign is +");
} else if (x < 0 && y < 0 && z < 0) { //all negatives 
  console.log("The sign is -");
} else if (x > 0 && y < 0 && z < 0) { //two negatives, one positive, result = positive 
  console.log("The sign is +");
} else if (x < 0 && y > 0 && z < 0) {  //two negatives and one positive , result = positive
  console.log("The sign is +");  //otherwise
} else {
  console.log("The sign is -");
}
