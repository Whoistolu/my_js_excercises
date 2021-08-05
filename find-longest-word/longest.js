function findLongestWord(str) {
    let words = str.split(" ");
    let longest = "";

    for (var word of words) {
        if (word.length > longest.length) longest = word;

    }
    return longest.length;
}

findLongestWord("To be sincere software engineering requires discipline and diligence");