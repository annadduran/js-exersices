// Define a function named Longest_Country_Name that finds the longest country name in an array
function Longest_Country_Name(country_name) {
  // Use the reduce function to iterate through the array and find the longest country name
  return country_name.reduce(function(lname, country) {
    // Return the longer of the current longest name (lname) and the current country name
    return lname.length > country.length ? lname : country;
  }, "");
}

// Log the result of calling Longest_Country_Name with the input array to the console
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));
