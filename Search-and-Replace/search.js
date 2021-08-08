function myReplace(str, before, after) {
    let words = str.split(" ");
    if (before[0] === before[0].toUpperCase()) {
        after = after[0].toUpperCase[0] + after.slice(1);
    }

    for (var i = 0; i < words.length; i++) {
        if (words[i] === before) {
            words[i] = after;
        }
    }

    return words.join(" ");
}

myReplace("Will you come over to my place", "over", "ahead");