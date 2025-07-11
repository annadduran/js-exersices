// Define a function named BiggerElements that returns a filtering function
function BiggerElements(val) {
   // Return a filtering function that checks if the array element is greater than or equal to the given value (val)
   return function(evalue, index, array) {
      return (evalue >= val);
   };
}

// Create an array named result by filtering elements greater than or equal to 10 using BiggerElements(10)
var result = [11, 45, 4, 31, 64, 10].filter(BiggerElements(10));

// Log the filtered array to the console
console.log(result); 
