// Define a function named insert that takes three parameters:
// main_string (the main string where ins_string will be inserted)
// ins_string (the string to insert into main_string)
// pos (the position in main_string where ins_string will be inserted)
insert = function insert(main_string, ins_string, pos) {
   // If pos is not provided, default it to 0
   if(typeof(pos) == "undefined") {
    pos = 0;
  }
   // If ins_string is not provided, default it to an empty string
   if(typeof(ins_string) == "undefined") {
    ins_string = '';
  }
   // Insert ins_string into main_string at position pos
   return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
}
// Test cases to demonstrate the functionality of the insert function
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));
