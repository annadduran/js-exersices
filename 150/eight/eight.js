//Generate a random interger between 1 and 10 
var num = Math.ceil(Math.random() * 10);

//Log the number
console.log(num);

//prompt the user to guess a number between 1 and 10 
var gnum = prompt ('Guess the number between 1 and 10 inclusive');

//check if the guessed number matches the generated random number
if (gnum == num)
    //log a message if the guessed numer matches with the random number
    console.log('MATCHED');
else
    //log a message if does not match
    console.log('NOT MATCHED, THE NUMBER WAS ' + gnum);
