function getIndexToIns() {
    arr.sort(function (a, b) {
        return a - b;
    })
    for (var i = 0; i < arr.length; i++) {
        if (num <= arr[i]) {
            return i;
        }
    }
}

getIndexToIns([40, 60, 5], 50);