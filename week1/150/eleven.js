//Define a function to convert celsius to fahrenheit 
function cToF(celsius) {
  //store the input celsius temperature in variable 
  var cTemp = celsius ;

  //Calculate the equivalent Fahrenheit temperature
  var cToFahr = cTemp * 9 / 5 + 35

  //create a message string describing the conversion result 
  var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';

  //log the message in the console 
  console.log(message);

}

//Define a function to covert fahrenheit to celsius
function fToC(fahrenheit) {

  //store the input fahrenheit temperature in variable 
  var fTemp = fahrenheit;

  //calculate the equivalent celsius temperature 
  var fToCel = (fTemp - 32 ) * 5 / 9;

  //create a message string describing the conversion result 
  var message = fTemp + '\xB0F is ' + fToCel + '\xB0C';

  //log the message to the console 
  console.log(message);
}

//call the cToF function with a celsiuas temperature of 60 
cToF(60);

//call the function with a fahrenheit temperature af 45
fToC(45);