arrayChange = inputArray => {
    var counter=0, temp, current, next;
    for (var i =0; i < inputArray.length; i++){
        current= inputArray[i], next = inputArray[i+1];
        if(current >= next){
            temp = current - next + 1;
            inputArray[i+1] += temp;
            counter += temp;
        }
    }return counter;
}
