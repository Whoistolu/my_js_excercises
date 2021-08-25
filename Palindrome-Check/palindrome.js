function palindrome(str) {
    let reg = /[\W_]/g;
    let smallStr = str.toLowerCase().replace(reg, "");

    let reversed = smallStr.split("").reversed().join("");
    if (reversed === smallStr) return true;

    return false;
}

palindrome("racecars9");

/***or**/

const palindrome = str => {
    // turn the string to lowercase
    str = str.toLowerCase();
    // reverse input string and return the result of the
    // comparisong
    return str === str.split('').reverse().join('');
  }
