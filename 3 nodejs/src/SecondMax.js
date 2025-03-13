function generateRandomArray(length, min, max) {
    var randomArray = [];
    for (var i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomNumber);
    }
    return randomArray;
}
function findSecondMax(numArray) {
    var max = 0;
    var secondMax = 0;
    numArray.forEach(function (num) {
        if (num > secondMax) {
            if (num > max) {
                secondMax = max;
                max = num;
            }
            else {
                secondMax = num;
            }
        }
    });
    return secondMax;
}
function main() {
    var numArray = [5, 2, 6, 20, 8, 3, 2, 15, 7, 14, 9, 4, 10];
    var numArray2 = generateRandomArray(10, 0, 100);
    var secondMax = findSecondMax(numArray2);
    console.log("Array: ", numArray2);
    console.log("Second max of the array is:", secondMax);
}
main();
