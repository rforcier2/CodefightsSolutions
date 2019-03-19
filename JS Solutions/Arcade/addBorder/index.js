function addBorder(picture) {
    var answer = [];
    var newRows = "";
    for (var i = 0; i < picture[0].length + 2; i++) {
        newRows += "*";
    }
    answer.push(newRows);
    for (var i = 0; i < picture.length; i++) {
        var row = "*";
        for (var j = 0; j < picture[0].length; j++) {
          row += picture[i][j];
        }
        row += "*";
        answer.push(row);
      }
      answer.push(newRows);
      return answer;
}
