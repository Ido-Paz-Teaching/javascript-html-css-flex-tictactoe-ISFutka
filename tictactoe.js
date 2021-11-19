//Cells winning (horizontally || Vertically || diagonally) options:
///////////////['0','1','2','3','4','5','6','7','8'];
//Horizontally1['x','x','x',' ',' ',' ',' ',' ',' '];
//Horizontally2[' ',' ',' ','x','x','x',' ',' ',' '];
//Horizontally3[' ',' ',' ',' ',' ',' ','x','x','x'];
//
////Vertically1['x',' ',' ','x',' ',' ','x',' ',' '];
////Vertically2[' ','x',' ',' ','x',' ',' ','x',' '];
////Vertically3[' ',' ','x',' ',' ','x',' ',' ','x'];
//
////Diagonally1['x',' ',' ',' ','x',' ',' ',' ','x'];
////Diagonally2[' ',' ','x',' ','x',' ','x',' ',' '];
//
//recieve a string array parameter and return true
//if the game is a draw or false if not.
function hasDraw(selectionArray) {
   return false;
}
//recieve a string array parameter and return true 
//if someone won the game or false if not.
function hasWon(selectionArray) {
    return false;
}
//Please , don't modify the following code
if (typeof module !== "undefined") {
    module.exports = {
        hasDraw,
        hasWon
    }
}