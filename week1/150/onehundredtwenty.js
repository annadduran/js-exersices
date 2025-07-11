// Function to check if a point (a, b) is inside a circle with center (x, y) and radius r
function check_a_point(a, b, x, y, r) {
    // Calculate the squared distance between the center of the circle (x, y) and the point (a, b)
    var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
    
    // Square the radius for comparison
    r *= r;
    
    // Check if the squared distance between points is less than the squared radius
    if (dist_points < r) {
        return true; // Point is inside the circle
    }
    return false; // Point is outside the circle or on the circle
}

// Test cases
console.log(check_a_point(0, 0, 2, 4, 6)); // Output: true (Point (0,0) is inside the circle with center (2,4) and radius 6)
console.log(check_a_point(0, 0, 6, 8, 6)); // Output: false (Point (0,0) is outside the circle with center (6,8) and radius 6) 
