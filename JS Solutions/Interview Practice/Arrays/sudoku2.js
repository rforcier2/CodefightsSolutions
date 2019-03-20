/*
Sudoku is a number-placement puzzle. The objective is to fill a
9 × 9 grid with numbers in such a way that each column, each row,
and each of the nine 3 × 3 sub-grids that compose the grid all
contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of
numbers represents a valid Sudoku puzzle according to the layout
 rules described above. Note that the puzzle represented by grid
 does not have to be solvable.
EXAMPLE:
grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
the output should be
sudoku2(grid) = true;

For

grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
        ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
        ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '3', '.', '.', '.', '.']]
the output should be
sudoku2(grid) = false;

The given grid is not correct because there are two 1s in the
second column. Each column, each row, and each 3 × 3 subgrid
can only contain the numbers 1 through 9 one time.
*/

function sudoku2(grid) {
    var region = [];
    var tempRow = [];
    var tempCol= [];
    var i;

    for (i=0; i<9; i++) {
        tempRow[i]=new Set();
        tempCol[i] = new Set();
    }
    for (i=0; i<3; i++) {
        region[i]=[];
        for (var j=0; j<3; j++) {
            region[i][j]=new Set();
        }
    }

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            let num = grid[i][j];
            if (num == '.') continue;
            var validRow = Math.floor(i/3);
            var validCol = Math.floor(j/3);

            if (tempRow[i].has(num)) {
                return false;
            } else {
                tempRow[i].add(num);
            }
            if (tempCol[j].has(num)) {
                return false;
            } else {
                tempCol[j].add(num);
            }
            if (region[validRow][validCol].has(num)) {
                return false;
            } else {
                region[validRow][validCol].add(num);
            }
        }
    }
    return true;
}
