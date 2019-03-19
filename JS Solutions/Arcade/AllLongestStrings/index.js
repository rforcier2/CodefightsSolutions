allLongestStrings = inputArray => {
    var compare = inputArray.reduce(function (x, y) {
        return x.length > y.length ? x : y;
    });
    var longestWords = [];
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length === compare.length) {
            longestWords.push(inputArray[i]);
        }
    }
    return longestWords;
}
