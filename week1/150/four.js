//triangle area 
//sides 5, 6 , 7

var side1 = 5;
var side2 = 6;
var side3 = 7;

//semi-perimeter 
var s = (side1 + side2 + side3) / 2;

//heron's formula
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

//log the area
console.log(area);


