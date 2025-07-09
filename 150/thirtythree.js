//define a function with paremeters x and y
function number_ranges(x,y){
    //check if x and y fall within the firts range (40 to 60) or second range (70 to 100)
    if ((x >= 40 && x <= 60 && y >= 40 && y <= 60)|| (x >= 70 && x <= 100 && y >= 70 && y <= 100)){
        //return true if the condition are met
        return true;
    }else{
        //return false if the condition are not met
        return false;
    }
} 

//log the result calling the function
console.log(number_ranges(44,56));

console.log(number_ranges(70, 95));

console.log(number_ranges(50, 89));