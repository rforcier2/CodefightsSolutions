alternatingSums = a => {
    var sums = [];
    var evenSum = 0;
    var oddSum=0;
    for (var i =0; i < a.length; i++){
    [i] % 2 === 0 ? evenSum += a[i]
                  : oddSum += a[i]
        }
    sums.push(evenSum, oddSum);
    return sums;
}
