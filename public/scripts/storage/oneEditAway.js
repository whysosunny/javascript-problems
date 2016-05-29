//One Edit Away.

// There are three types of edits that can be performed on strings:
// Insert a character (character count +=1).
// remove a character (character count -=1)
// replace a character. -> Problem child.
// So crap. you get two strings and see if the second is one edit away.

//Insert a character
function oneEditAway(str1, str2) {

    if(str1.length > str2.length) {
        return oneInsert();
    } else if (str1.length < str2.length) {
        return oneRemoval();
    } else if(str1.length === str2.length) {
        return oneReplace();
    }


    function oneInsert() {
        var count = 0;
        var j = 0;
        for(var i=0; i<str1.length; i++) {
            if(str1[i] !== str2[j]) {
                count +=1;
                continue;
            }
            j+=1;
        }
        var x = (count ===1);
        return x;
    }

    function oneRemoval() {
        var count = 0;
        var i = 0;
        for(var j=0; j<str2.length; j++) {
            if(str1[i] !== str2[j]) {
                count +=1;
                continue;
            }
            i+=1;
        }

        return (count===1);
    }

    function oneReplace() {
        var count = 0;
        var j = 0;
        for(var i=0; i<str1.length; i++) {
            if(str1[i] !== str2[j]) {
                count +=1;
            }
            j+=1;
        }

        return (count ===1);
    }
}

console.log(oneEditAway("bharadwaj","bhadatwaj"));