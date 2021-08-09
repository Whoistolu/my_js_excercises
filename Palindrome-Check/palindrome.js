function palindrome(str) {
    /*Using regex*/
    /**Will complete this exercise tomorrow*/

    let reversed = str.split("").reversed().join("");
    if (reversed === str) return true;

    return false;
}

palindrome("racecars");