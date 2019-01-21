function matrixElementsSum(matrix) {
    var temp = [];
    var sum = new Number();
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            // matrix[i][j] == 0 ? temp.push(j)?
            if (matrix[i][j] == 0) {
                temp.push(j);
            }
            if (!temp.includes(j)) {
                sum += matrix[i][j];
            }
        }
    }
    return sum;
}
