sortByHeight = a => {
    a.toString();
    let second = [];
    let ones = [];
    for (var i = 0; i < a.length; i++){
       a[i] == -1 ? ones.push(i) : second.push(a[i]);
    }
    second.sort((x, y) => x - y)
    for (var j = 0; j < ones.length; j++){
        second.splice(ones[j], 0, -1);
    }
    return second;
}
