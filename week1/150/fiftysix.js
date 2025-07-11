//function to divide two numbers and format the result with comas
function division_string_format(number1, number2){
    //check if the divisor is zero
    if (number2 === 0){
        return "CANNOT DIVIDE BY ZERO";
    }

    //perfom division 
    let result = number1 / number2;
    //format result with commas
    let formattedResult = result.toLocaleString(undefined, {maximumFractionDigits: 2});
    //return the formatted result
    return formattedResult;
}

//example usage
//define the dividend and divisor 
let dividend =  1000000;;
let divisor = 107;

//perfom division and format the result
let result = division_string_format(dividend, divisor);
//print the result 
console.log("Resul: " + result);