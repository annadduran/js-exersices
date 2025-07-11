// Define a function named formatted_string with three parameters: pad, user_str, and pad_pos
function formatted_string(pad, user_str, pad_pos) {
  // Check if user_str is undefined, if so, return pad
  if (typeof user_str === 'undefined') 
    return pad;
  // Check if pad_pos is 'l' (left), if true, execute the following block
  if (pad_pos == 'l') {
    // Concatenate pad with user_str, slice the result to keep only the last characters equal to the length of pad, and return the result
    return (pad + user_str).slice(-pad.length);
  } 
  // If pad_pos is not 'l', execute the following block
  else {
    // Concatenate user_str with pad, then substring to keep only the characters equal to the length of pad, and return the result
    return (user_str + pad).substring(0, pad.length);
  }
}
// Test the function with different parameters and log the results to the console
console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));
