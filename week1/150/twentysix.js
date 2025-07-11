//define a function that takes a parameter str
function front_back3(str){
    //check if the length os str is greater tha or equal to 3
    if (str.length >= 3){
        //set str_len to 3
        str_len = 3;
        //extract the last 3 characters of str
        back = str.substring(str.length - 3);
        //retrun the concatenation of back, str and back 
        return back + str + back;
    } else {
        //if the lenght is less tha 3 return false
        return false;
    }
}

//log the result calling the function 
console.log(front_back3("abc"));

console.log(front_back3("ab"));

console.log(front_back3("saludos"));
