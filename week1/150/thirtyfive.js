//define a function with parameters str1 (a string) and char (a character)
function check_char(str1, char){
    //initialize a counter variable to 0 
    let ctr = 0;

    //use a for loop to iterate through each character in the string
    for (let i = 0; i < str1.length; i++)
    {
        //check if the current character is equal to the specified char and if the index is between 1 and 3 (inclusive)
        if ((str1.charAt(i) == char) && (i >= 1 && i <= 3))
        {
            //set the counter to 1 and break out of the loop
            ctr = 1;
            break;
        }
    }

    //check if the counter is q and return true, otherwise return false
    if (ctr == 1) return true;
    return false;
}

console.log(check_char("Python", "y"));

console.log(check_char("JavaScript", "a"));

console.log(check_char("Taylor", "a"));

console.log(check_char("Harry", "H"));

console.log(check_char("Louis", "i"));
