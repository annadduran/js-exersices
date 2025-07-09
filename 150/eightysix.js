 // Function to determine the type of angle based on its measure
function angle_Type(angle) {
  if(angle < 90) {
    return "Acute angle.";  // Return this message if the angle is less than 90 degrees
  }
  if(angle === 90) {
    return "Right angle.";  // Return this message if the angle is exactly 90 degrees
  }
  if(angle < 180) {
    return "Obtuse angle."; // Return this message if the angle is less than 180 degrees but not 90 degrees
  }
  return "Straight angle.";  // Return this message if the angle is exactly 180 degrees
}

// Example usage
console.log(angle_Type(47));   // Acute angle.
console.log(angle_Type(90));   // Right angle.
console.log(angle_Type(145));  // Obtuse angle.
console.log(angle_Type(180));  // Straight angle.
