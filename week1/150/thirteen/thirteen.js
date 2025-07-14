//create variable with user-defined name 

//declare a variable named var_name and assign it the 'abcd'
var var_name = 'abcd';

//declare a variable named n and assign it number 120 
var n = 120;

//Assign the value of n to the property named 'abcd' of the 'this' object
this[var_name] = n;

//log the value of the propety 'abcd' of the 'this object to the console
console.log(this[var_name]);
