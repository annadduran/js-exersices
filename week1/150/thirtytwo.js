//define a function with parameters x and y
function near_100(x, y){
    //check if x is not equal to y 
    if (x != y){
        //calculate the absolute difference between x and 100, store it in x1
        x1 = Math.abs(x - 100);

        //calculate the absolute difference between x and 100, store it in y1
        y1 = Math.abs(y - 100);

        //compare x1 and y1 to determine which value is closer to 100
        if (x1 < y1) {
            //return x if x is closer to 100
            return x;
        }

        //return y if is closer to 100
        if (y1 < x1){
            return y;
        }

        //return 0 if x and y are equidistant from 100
        return 0;
    }else{
        //return false if x is equal to y
        return false;
    }
}
//log the result callign the function
console.log(near_100(90, 89));
console.log(near_100(-90, -89));
console.log(near_100(90, 90));
