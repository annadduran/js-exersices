// Define a function named abc
function abc() {
    // Log the name of the current function to the console using arguments.callee.name
    console.log(arguments.callee.name);
}

// Call the abc function
abc(); 
