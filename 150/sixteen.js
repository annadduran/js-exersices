//define a function named sumTriple that takes two parameters
function sumTriple(x,y){
  //check if x is equal to y
  if (x == y){
    //if true, return three times the sum of x and y
    return 3 * (x + y);

  }else{
    //if false , return the sum of x and y
    return (x + y);
  }
}

//log the result calling the function
console.log(sumTriple(10, 20));

console.log(sumTriple(10,10));