const a = (num) => {
    var array = [];
    for (var i of num) {
        var f = 1;
        for (var j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                f = 0;
                break;
            }
        }
        if (f == 1) {
            array.push(i);
        }
    }
    return array;
}
b = a([1, 2, 3, 4, 5, 6, 9, 12, 17]);
console.log(b);