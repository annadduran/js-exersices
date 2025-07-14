// Define a function called 'longest_Valid_Parentheses' with a parameter 'text'
const longest_Valid_Parentheses = (text) => {
  // Check if the input 'text' is not a string, return a message
  if (typeof text !== 'string') {
    return 'It must be string'
  }
  // Get the length of the input string 'text'
  const n = text.length 
  // Create an empty stack to store indices of brackets
  const stack = []
  // Initialize an array 'result' filled with -Infinity to store results
  const result = new Array(n).fill(-Infinity)
  // Loop through each character of the string 'text'
  for (let i = 0; i < n; i++) {
    // Get the current bracket
    const bracket = text[i]
    // If the current bracket is ']' and the top of the stack contains '[', mark the current index as valid
    if (bracket === ']' && text[stack[stack.length - 1]] === '[') {
      result[i] = 1
      result[stack[stack.length - 1]] = 1
      stack.pop()
    } 
    // If the current bracket is not a closing bracket, push its index to the stack
    else {
      stack.push(i)
    }
  }
  // Sum up all adjacent valid brackets
  for (let i = 1; i < n; i++) {
    result[i] = Math.max(result[i], result[i] + result[i - 1])
  }
  // Add 0 to the result array if there are no valid parentheses, so it will return 0 instead of -Infinity
  result.push(0)
  // Return the maximum value from the 'result' array
  return Math.max(...result)
}

// Test the 'longest_Valid_Parentheses' function with different input strings and output the result
console.log(longest_Valid_Parentheses("[[]")) // Output: 2
console.log(longest_Valid_Parentheses("][][]]")) // Output: 2
console.log(longest_Valid_Parentheses("")) // Output: 0
