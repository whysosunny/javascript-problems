// find if str2 is a substring of str1:

// function isSubstring(str1, str2) {
//     if(str1.length> str2.length) {
//         var j = 0;
//
//         function compareStrings(charPos) {
//             var j = 0;
//             for(var i= charPos; i<str1.length; i++) {
//                 if(str1[i] !== str2[j]) {
//                     return false
//                 } else if(i === str2.length) {
//                     return true
//                 } else {
//                     console.log("something went wrong");
//                 }
//                 j+=1;
//             }
//         }
//
//         for(var i=0; i<str1.length; i++) {
//             if(str1[i] === str2[0]) {
//                 compareStrings(i);
//             }
//         }
//     } else {
//         return false;
//     }
//
//
// }

//FAILED

//Let's try again.

//Now though first. What do we need? To find if the previous string is a substring.
//Brain storm ideas:
//1. Look for the first element and match it with the string in the previous string
//We have a problem. If it doesn't, it'll just look back. Should not return false until we've finished searching.
//Awesome we have a substring method in JS.
//Try:

function isSubstring(str1,str2) {
    if(str1.length > str2.length) {
        for(var i=0; i<str1.length; i++) {
            if(str1[i] === str2[0]) {
                var subStr = str1.substring(i, i+str2.length);
                if(subStr === str2) {
                    return true;
                }
            } else if (i=== str1.length-1) {
                return false;
            }
        }
    } else {
        return false;
    }
}

// console.log(isSubstring("I have a guitar","asdfasd"));

//DONE! HELL YEAH!!!!!!!

//HOLY SHIT! Rotation? That sucks! But hey, let's see.
// First: same length
// All characters, same number of instances -> Not really needed. It'll be a permutation.
// First find the position of the first letter
// Check if the characters between the initial and the end of the string is the same?
// Or see if the substring between the initial instance and the end of the string is the same, reset the counter.
// Reset the counter.
// Check if the start of the second string and the initiation point has the same string.

// Solve that? Sure. It's not a big problem.

function isRotation(str1,str2) {
    if(str1.length === str2.length) {
        for(var i=0; i<str1.length; i++) {
            if(str1[0] === str2[i]) {
                if(isSubstring(str1,str2.slice(i,str2.length))) {
                    if(isSubstring(str1, str2.slice(0,i))) {
                        return true;
                    }
                }
            }
        }
        return false;
    } else {
        return false;
    }
}

// console.log(isRotation("waterbottle","erbottlewat"));


//HOLY SHIT! I solved this without any retouching! I'm getting good yeah!!!

//BUT HEY! LOL! There's a better solution!

function rotationOrNot(str1,str2) {
    if(str1.length === str2.length) {
        var compareString = str1+str1;
        return (isSubstring(compareString,str2));
    } else {
        return false;
    }
}

console.log(rotationOrNot("waterbottle","erbottlewat"));

//LOL! This worked!
