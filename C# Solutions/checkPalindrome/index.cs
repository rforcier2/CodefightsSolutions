bool checkPalindrome(string inputString)
{
    // make a variable to convert the string into an
    // array of Chars.
    char[] reverseString = inputString.ToCharArray();

    // reverse the array so the letters are in opposite order
    Array.Reverse(reverseString);

    // check if the reverse string equals our input string
    return new String (reverseString).Equals(inputString);
}
