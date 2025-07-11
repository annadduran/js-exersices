//define a function with parameter text
function LetterChanges(text){
    //initialize an arra by splitting the input text into individual charcaters
    var s = text.split('');

    //iterate through each character in the array
    for (var i = 0; i < s.length ; i ++){
        //caesar cipher: shift each character by one position in the alphabet
        switch(s[i]){
            case ' ':// space, do nothing
                break;
            case 'z':
                s[i] = 'a';//letter z , return to the begging
                break;
            case 'Z':
                s[i] = 'A';//the same but capital letters
                break;
            default:
                //for any other letter, advance one position in the ASCII
                s[i] = String.fromCharCode(1 + s[i].charCodeAr(0));

        }

        //convert vowels to uppercase
        switch(s[i]){
            case 'a': case 'e': case 'i': case 'o': case 'u':
                s[i] = s[i].toUpperCase();
        }
    }

    //join the modified characters back into a string and return the result
    return s.join('');
}

//log the result 
console.log(LetterChanges("PYTHON"));

console.log(LetterChanges("taylor"));
