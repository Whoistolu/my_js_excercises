function palindrome(str) {
    let reg = /[\W_]/g;
    let smallStr = str.toLowerCase().replace(reg, "");

    let reversed = smallStr.split("").reversed().join("");
    if (reversed === smallStr) return true;

    return false;
}

palindrome("racecars9*_");