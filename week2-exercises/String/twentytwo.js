// Define a function named subStrAfterChars with parameters str (input string), char (character to search for), and pos (position indicator).
function subStrAfterChars(str, char, pos)
{
  // If the position indicator is 'b' (before), return the substring after the specified character.
  if(pos=='b')
    return str.substring(str.indexOf(char) + 1);
  // If the position indicator is 'a' (after), return the substring before the specified character.
  else if(pos=='a') 
    return str.substring(0, str.indexOf(char));
  // If the position indicator is neither 'a' nor 'b', return the original string.
  else
    return str;  
}

// Test the subStrAfterChars function by printing the substring after ':' with the position indicator 'a'.
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));

// Test the subStrAfterChars function by printing the substring before 'E' with the position indicator 'b'.
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
