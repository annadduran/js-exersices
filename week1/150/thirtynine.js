//define a function with parameters x and y 
function sortaSum(x,y){
    //calculate the sum of x and y and store it in a variable called sum_nums
    const sum_nums = x + y;

    //check if the sum is between 50 and 80(inclusive)
    if (sum_nums >=50  && sum_nums <= 80){
        //if true return 65
        return 65;
    }

    //if the condition is not met , return 80
    return 80;
}

//log the result calling the function
console.log(sortaSum(20, 20));

console.log(sortaSum(30, 20));

console.log(sortaSum(90, 80));

console.log(sortaSum(40, 40));