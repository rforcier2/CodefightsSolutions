adjacentElementsProduct = inputArray => {
    var maxSoFar = inputArray[0] * inputArray[1];
    for (var i = 1; i < inputArray.length; i++) {
        if (inputArray[i] * inputArray[i+1] > maxSoFar) {
            maxSoFar = inputArray[i] * inputArray[i+1];
        }
    }
    return maxSoFar;
}
