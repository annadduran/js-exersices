//define a function with parameters totmarks and is exam
function exam_status (totmarks, is_exam){
    //check if the examn is truthy (evaluates to true)
    if (is_exam){
        //returns true if totmarks is greater tha or equal 90
        return totmarks >= 90;
    }


    //returns true if totmarks is between 89 and 100
    return totmarks >=89 && totmarks <= 100;
}

//log the result calling the function
console.log(exam_status("78", " "));

console.log(exam_status("89", "true"));

console.log(exam_status("100", " true"));
