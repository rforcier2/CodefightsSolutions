/*
Note: Write a solution that only iterates over the string once and
uses O(1) additional memory, since this is what you would be
asked to do during a real interview.

Given a string s consisting of small English letters, find and
return the first instance of a non-repeating character in it.
If there is no such character, return '_'.

*/

firstNotRepeatingCharacter = string => {
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);

    if (string.indexOf(char) == i && string.indexOf(char, i + 1) == -1)
      return char;
  }
  return '_';
}
