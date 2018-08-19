function almostIncreasingSequence(sequence) {
    let count = 0;
    let a = -100;
    let b = -100;
    for (let i = 0; i < sequence.length; i++) {
        sequence[i] > a ? b = a = sequence[i];
        : sequence[i] > b? a = sequence[i], count++;
        :count++;
        }
    }
    return count < 2;
}
