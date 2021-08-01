function sumAll(arr) {
    let start = Math.min(arr[0], arr[1]);
    let end = Math.max(arr[0], arr[1]);
    let total = 0;

    for (var i = start; i <= end; i++) {
        total += i;
    }
    return total;
}

sumAll([1, 4]);