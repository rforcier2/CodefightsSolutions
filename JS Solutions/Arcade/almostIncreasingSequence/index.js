function almostIncreasingSequence(sequence) {
    let count = 0;
    let a = -100;
    let b = -100;
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] > a) {
            b = a;
            a = sequence[i];
        } else if (sequence[i] > b) {
            a = sequence[i];
            count++;
        } else {
            count++;
        }
    }
    return count < 2;
}
