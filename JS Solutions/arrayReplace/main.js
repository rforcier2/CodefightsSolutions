
// elemToReplace = element,
// substitutionElem = replacement;
arrayReplace = (inputArray, element, replacement) => {
    return inputArray.map(item =>
        item == element ? replacement : item
    );
}

/*
    Other solutions that may be considered:

    arrayReplace = (inputArray, elemToReplace, substitutionElem) => {

    var result = inputArray.map( function(index){
        if (index == elemToReplace){
            return substitutionElem;
        }
        return index;
    });
    return result;

    }


    Simple solution with for loop:
    function arrayReplace(inputArray, elemToReplace, substitutionElem){

        for (var i = 0; i < inputArray.length; i++){
            if (inputArray[i] == elemToReplace)
            inputArray[i] = substitutionElem;
        }
      return inputArray;
    }
*/
