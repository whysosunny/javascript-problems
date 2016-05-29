//String Compression - Basic string compression. Using counts of repeated characters. aabcccccaaa - a2b1c5a3

//Seems simple.

function weirdCompressString(str) {
    var myObj = {};
    var count = 1;
    var newStr = "";
    var lastIndex = 0;
    var arr = [];
    var strPosition = str.length-1;
    for(var i=0; i<=strPosition; i++) {
        lastIndex = arr.length -1 ;
        var currentItem = str[i];
        if(i === 0) {
            arr.push(str[i]);
        } else if(str[i] === arr[lastIndex]) {
            count+=1;
        } else if (str[i] !== arr[lastIndex]) {
            newStr += (arr[lastIndex] + count);
            count = 1;
            arr.push(str[i]);
        }

    }
    newStr += (arr[arr.length-1] + count);

    return newStr;
}

console.log(weirdCompressString("asdfffffsssssaaaad"));

//Wasn't simple! :(