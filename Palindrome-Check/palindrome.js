function palindrome(str) {
    let smallStr = str.toLowerCase().replace(reg, "");

    let reversed = str.split("").reversed().join("");
    if (reversed === str) return true;

    return false;
}

palindrome("racecars");