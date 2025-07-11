//define a function that takes a parameter str
function start_spec_str(str){
    //check if the length os str is less than 4
    if (str.length < 4){
        //if true return false 
        return false;
    }

    //extract the first character of str
    front = str.substring(0,4);
    //check if front is equal to java
    if (front == 'Java'){
        //if true, retunr true 
        return true;
    }else{
        //if not equal to java return false 
        return false;
    }

}

//log the result calling the function
console.log(start_spec_str("JavaScript"));
console.log(start_spec_str("Java"));
console.log(start_spec_str("Taylor"));