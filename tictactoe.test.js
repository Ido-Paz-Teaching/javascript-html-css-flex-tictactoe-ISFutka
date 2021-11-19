const { test } = require('@jest/globals');
let ttt = require('./tictactoe');
//horizontally || Vertically || diagonally , winning || draw tests
//////////['0','1','2','3','4','5','6','7','8'];
let hw1 = ['x','x','x',' ',' ',' ',' ',' ',' '];
let hw2 = [' ',' ',' ','x','x','x',' ',' ',' '];
let hw3 = [' ',' ',' ',' ',' ',' ','x','x','x'];
let hl1 = ['o','x','x',' ',' ',' ',' ',' ',' '];
let hl2 = [' ',' ',' ','x','o','x',' ',' ',' '];
let hl3 = [' ',' ',' ',' ',' ',' ','x','x','o'];
//
let vw1 = ['x',' ',' ','x',' ',' ','x',' ',' '];
let vw2 = [' ','x',' ',' ','x',' ',' ','x',' '];
let vw3 = [' ',' ','x',' ',' ','x',' ',' ','x'];
let vl1 = ['o',' ',' ','x',' ',' ','x',' ',' '];
let vl2 = [' ','x',' ',' ','o',' ',' ','x',' '];
let vl3 = [' ',' ','x',' ',' ','x',' ',' ','o'];
//
let dw1 = ['x',' ',' ',' ','x',' ',' ',' ','x'];
let dw2 = [' ',' ','x',' ','x',' ','x',' ',' '];
let dl1 = ['o',' ',' ',' ','x',' ',' ',' ','x'];
let dl2 = [' ',' ','x',' ','x',' ','o',' ',' '];
//
let d1 =  ['o','o','x','x','x','o','o','x','o'];
let d2 =  ['o','x','o','x','o','x','o','x','o'];
//
hasWonHorizontally();
hasNOTWonHorizontally();
hasWonVertically();
hasNOTWonVertically();
hasWonDiagonally();
hasNOTWonDiagonally();
hasDraw();
//
function hasWonHorizontally() {
    test("has won horizontally " + hw1,()=>{
        expect(ttt.hasWon(hw1)).toBe(true);
    });
    //
    test("has won horizontally " + hw2,()=>{
        expect(ttt.hasWon(hw2)).toBe(true);
    }); 
    //
    test("has won horizontally " + hw3,()=>{
        expect(ttt.hasWon(hw3)).toBe(true);
    }); 
}
//
function hasNOTWonHorizontally() {
    test("has NOT won Horizontally " + hl1,()=>{
        expect(ttt.hasWon(hl1)).toBe(false);
    });
    //
    test("has NOT won Horizontally " + hl2,()=>{
        expect(ttt.hasWon(hl2)).toBe(false);
    }); 
    //
    test("has NOT won Horizontally " + hl3,()=>{
        expect(ttt.hasWon(hl3)).toBe(false);
    }); 
}
//
function hasWonVertically() {
    test("has won Vertically " + vw1,()=>{
        expect(ttt.hasWon(vw1)).toBe(true);
    });
    //
    test("has won Vertically " + vw2,()=>{
        expect(ttt.hasWon(vw2)).toBe(true);
    }); 
    //
    test("has won Vertically " + vw3,()=>{
        expect(ttt.hasWon(vw3)).toBe(true);
    }); 
}
//
function hasNOTWonVertically() {
    test("has NOT won Vertically " + vl1,()=>{
        expect(ttt.hasWon(vl1)).toBe(false);
    });
    //
    test("has NOT won Vertically " + vl2,()=>{
        expect(ttt.hasWon(vl2)).toBe(false);
    }); 
    //
    test("has NOT won Vertically " + vl3,()=>{
        expect(ttt.hasWon(vl3)).toBe(false);
    }); 
}
//
function hasWonDiagonally() {
    test("has won Diagonally " + dw1,()=>{
        expect(ttt.hasWon(dw1)).toBe(true);
    });
    //
    test("has won Diagonally " + dw2,()=>{
        expect(ttt.hasWon(dw2)).toBe(true);
    }); 
}
//
function hasNOTWonDiagonally() {
    test("has NOT won Diagonally " + dl1,()=>{
        expect(ttt.hasWon(dl1)).toBe(false);
    });
    //
    test("has NOT won Diagonally " + dl2,()=>{
        expect(ttt.hasWon(dl2)).toBe(false);
    }); 
}
//
function hasDraw() {
    test("has draw " + d1,()=>{
        expect(ttt.hasDraw(d1)).toBe(true);
    });
    //
    test("has draw " + d2,()=>{
        expect(ttt.hasWon(d2)).toBe(true);
    }); 
}
