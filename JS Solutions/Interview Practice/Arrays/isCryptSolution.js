/*A cryptarithm is a mathematical puzzle for which the
goal is to find the correspondence between letters and
digits, such that the given arithmetic equation consisting
of letters holds true when the letters are converted to digits.

You have an array of strings crypt, the cryptarithm, and an
array containing the mapping of letters and digits, solution.
The array crypt will contain three non-empty strings that follow
the structure: [word1, word2, word3], which should be interpreted
 as the **word1 + word2 = word3** cryptarithm.

If crypt, when it is decoded by replacing all of the letters in
the cryptarithm with digits using the mapping in solution, becomes
a valid arithmetic equation containing no numbers with leading zeroes,
 the answer is true. If it does not become a valid arithmetic solution,
 the answer is false.

Note that number 0 doesn't contain leading zeroes (while for example 00 or 0123 do).

EXAMPLE:

For crypt = ["SEND", "MORE", "MONEY"] and

solution = [['O', '0'],
            ['M', '1'],
            ['Y', '2'],
            ['E', '5'],
            ['N', '6'],
            ['D', '7'],
            ['R', '8'],
            ['S', '9']]
the output should be
isCryptSolution(crypt, solution) = true.

When you decrypt "SEND", "MORE", and "MONEY" using the mapping given in
crypt, you get ** 9567 + 1085 = 10652 ** which is correct and a valid
arithmetic equation.
*/


isCryptSolution = (crypt, solution) => {
    let first = crypt[0],
        second = crypt[1],
        answer = crypt[2],
        reg2 = new RegExp('^[0-9]+$');

    for (let i = 0; i < solution.length; ++i){
        let reg1 = new RegExp(solution[i][0], "g");

        first = first.replace(reg1, solution[i][1]);
        second = second.replace(reg1, solution[i][1]);
        answer = answer.replace(reg1, solution[i][1]);
    }



    return !reg2.test(first) || !reg2.test(second) || !reg2.test(answer)
         ? false

         : first[0] == '0' && first.length != 1
         ? false

         : second[0] == '0' && second.length != 1
         ? false

         : answer[0] == '0' && answer.length != 1
         ? false

         : parseInt(first) + parseInt(second) == parseInt(answer);

}
