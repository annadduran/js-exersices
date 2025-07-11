//separator to vissually distinguish the output 
console.log('------------------------');

//Loop through the years from 2014 to 2050 (inclusive)
for (var year = 2014; year <= 2050; year++){
    //create a day object from january 1st of the current year
    var d = new Date(year, 0, 1);
    
    //check if january 1st is sunday (where sundar corresponds to day index 0)
    if(d.getDay() === 0){
        //Lg message if january 1st is a sunday for the current year
        console.log("1st january is being a sunday " + year);

    }
}

//separator 
console.log('--------------------------');