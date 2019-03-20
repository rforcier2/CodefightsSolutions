/*
Given an array a that contains only numbers in the range
from 1 to a.length, find the first duplicate number for
 which the second occurrence has the minimal index. In
 other words, if there are more than 1 duplicated numbers,
 return the number for which the second occurrence has a
 smaller index than the second occurrence of the other number
 does. If there are no such elements, return -1.

Example

For a = [2, 1, 3, 5, 3, 2],
the output should be firstDuplicate(a) = 3.

*/

firstDuplicate = a => {
    let list = new Set();
    for (let int of a){
        if(list.has(int)){
            return int;
        } else {
            list.add(int);
        }
    }
    return -1
}

// Example:
//var input = [28, 19, 13, 6, 34, 48, 50, 3, 47, 18, 15, 34, 16, 11, 13, 3, 2, 4, 46, 6, 7, 3, 18, 9, 32, 21, 3, 21, 50, 10, 45, 13, 22, 1, 27, 18, 3, 27, 30, 44, 12, 30, 40, 1, 1, 31, 6, 18, 33, 5]

//console.log("result is: " + firstDuplicate(input));
// result is: 34
