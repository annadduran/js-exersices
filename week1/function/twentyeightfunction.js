// Define a function named addStudent that takes an id and a refreshCallback function as parameters
function addStudent(id, refreshCallback) {
    // Call the refreshCallback function
    refreshCallback();
}

// Define a function named refreshStudentList that logs 'Hello' to the console
function refreshStudentList() {
    console.log('Hello');
}

// Call the addStudent function with parameters 1 and the refreshStudentList function
addStudent(1, refreshStudentList); 


//en un caso real: Guardar un nuevo estudiante en una base de datos, Y luego actualizar la lista en pantalla con el callback.

