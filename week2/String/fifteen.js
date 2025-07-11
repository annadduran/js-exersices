// Define a function named humanize_format that takes a number num as input
humanize_format = function humanize(num) {
   // Check if the num parameter is undefined, return undefined if so
   if(typeof(num) == "undefined") return;
  // Check if the number modulo 100 falls within the range 11-13, return the number followed by "th" if true
  if(num % 100 >= 11 && num % 100 <= 13)
        return num + "th";
        
        // Switch statement to handle different cases based on the last digit of the number
        switch(num % 10) {
            // Return the number followed by "st" if the last digit is 1
            case 1: return num + "st";
            // Return the number followed by "nd" if the last digit is 2
            case 2: return num + "nd";
            // Return the number followed by "rd" if the last digit is 3
            case 3: return num + "rd";
        }
        // Return the number followed by "th" for all other cases
        return num + "th";
    }
// Output the result of calling the humanize_format function with different test cases
console.log(humanize_format());  
console.log(humanize_format(1));  
console.log(humanize_format(8));  
console.log(humanize_format(301));  
console.log(humanize_format(402));
