const countMines = (matrix, i, x, y) =>
  !!(matrix[y + i[0]] && matrix[y + i[0]][x + i[1]])

const minesweeper = matrix =>{
   let positions = [[1, -1],  [1, 0],  [1, 1],
                    [0, -1], /*[0,0]*/ [0, 1],
                    [-1, -1], [-1, 0], [-1, 1]];

  return matrix.map((row, y) =>
    row.map(( placeholder, x) =>
      positions.reduce((count, i) =>
        count += countMines(matrix, i, x, y), 0)))
}
