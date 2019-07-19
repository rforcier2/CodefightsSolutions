const reverseInParentheses = inputString => {
    let splitString = inputString.split('');
    let patt = /\((?=[^\(]*$)[^\)]+\)/gm;
    let answer = patt.test(splitString).reverse().join('');
    return answer;
}
