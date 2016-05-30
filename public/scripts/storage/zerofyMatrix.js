//If an element of a given matrix is 0, set both the corresponding column and row to zero.

var matrix  = [[3,0,3],[2,1,1],[1,2,5]];

//Try to find out if it's a valid array or not.
function validateMatrix(arr) {
    var firstElmLength = arr[0].length;
    for(var i=0; i<arr.length; i++) {
        if(arr[i].length !== firstElmLength) {
            return false;
        }
    }
    return true;
}

function printMatrix(arr) {
    if(validateMatrix(arr)) {
        var message;
        var row, col;
        for(i=0; i<arr.length; i++) {
            var printString = "";
            for(j=0; j<arr[0].length; j++) {
                if(arr[i][j] === 0) {
                    message = "Positon " + (i+1) + "x" + (j+1) + " has a 0 element";
                    row = i;
                    col = j;
                }
                printString += arr[i][j] + "  ";
            }
            console.log(printString);
        }
        return {
            message: message,
            row: row,
            col: col
        };
    } else {
        console.log("Not a valid matrix");
    }

}

function setToZero(arr, row, col) {
    for(var i=0; i<arr.length; i++) {
        arr[i][col] = 0;
    }
    for(var j=0; j<arr.length; j++) {
        arr[row][j] = 0;
    }
    printMatrix(arr);
}

function zerofy(arr) {
    var x = printMatrix(arr);
    console.log(x.message);
    console.log(" ");
    setToZero(arr, x.row,x.col);
}

zerofy(matrix);

