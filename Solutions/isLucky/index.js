isLucky = n => {
    let num = n.toString(),
        numSplit = num.split(''),
        sum1 = 0,
        sum2 = 0,
        firstHalf = numSplit.slice(0, num.length/2),
        secondHalf = numSplit.slice(num.length/2, num.length);
    if (num.length % 2 != 0){
        return false;
    }
    else {
       for (var i =0; i < firstHalf.length; i++){
           sum1 += parseInt(firstHalf[i]);
       }
        for (var j =0; j < secondHalf.length; j++){
           sum2 += parseInt(secondHalf[j]);
       }
    }return sum1 == sum2;
}
