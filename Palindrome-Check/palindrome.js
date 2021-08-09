function palindrome(str) {
    let reversed = str.split("").reversed().join("");
    if (reversed === str) return true;

    return false;
}

palindrome("racecars");