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
    
    for (i in firstHalf){
           sum1 += parseInt(firstHalf[i]);
    }
    for (j in secondHalf){
           sum2 += parseInt(secondHalf[j]);
    }
    return sum1 == sum2;
}

