//Given a string, write a function to check if it is a permutation of a palindrome.

//So we need to find out if one of it's permutations is a palindrome.

//Characteristics of a palindrome: sunus, suus. It has 2 of every letter and max one center element. That's all right? Remove spaces too.

function permOfPalindrome(str) {
//first, remove all the spaces.
var arr = str.split('');
var myObj = {};
var count = 0;

for(i=0; i<arr.length; i++) {
    if(arr[i] === " "){
        arr.splice(i,1);
        i = i-1;
        console.log(arr);
    } else if (!myObj[arr[i]]) {
        myObj[arr[i]] = 1;
    } else if (myObj[arr[i]]) {
        myObj[arr[i]] += 1;
    }
}


for(prop in myObj) {
    if(myObj[prop]%2 !== 0) {
        if(myObj[prop] === 1) {
            count += 1;
        } else {
            return ("Not a permutation of a palindrome");
        }
    }
}

if(count > 1) {
    return ("Note a permutation of a palindrome")
}

return ("Permutation of a palindrome! YAY!");
//store the values with a number in the object. with one exception. Will that work? snuus
}

console.log(permOfPalindrome("tact coa"));
