// Define a function that takes two parameters, str and char_pos
function remove_character(str, char_pos) {
  // Extract the substring from the beginning up to (but not including) char_pos
  part1 = str.substring(0, char_pos);
  // Extract the substring from char_pos + 1 to the end
  part2 = str.substring(char_pos + 1);
  // Return both parts joined, removing the character at char_pos
  return part1 + part2;
}

// Correct function calls
console.log(remove_character("Python ", 0)); 
console.log(remove_character("Python", 3)); 
