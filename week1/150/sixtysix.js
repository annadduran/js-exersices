// Define a function named city_name with parameter str
function city_name(str) {
  // Check if str has length greater than or equal to 3 and starts with 'Los' or 'New'
  if (str.length >= 3 && ((str.substring(0, 3) == 'Los') || (str.substring(0, 3) == 'New'))) {
    // Return the input str if conditions are met
    return str;
  }

  // Return an empty string if conditions are not met
  return '';
}

// Call the function with sample arguments and log the results to the console
console.log(city_name("New York"));
console.log(city_name("Los Angeles"));
console.log(city_name("London")); 
