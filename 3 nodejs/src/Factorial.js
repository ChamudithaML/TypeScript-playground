"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function factorial(r1) {
    var number = 0;
    var factorialVal = 1;
    r1.question("Enter value: ", function (k) {
        number = parseInt(k);
        for (var i = 1; i <= number; i++) {
            factorialVal = factorialVal * i;
        }
        console.log("Factorial of ", number, " is ", factorialVal);
        r1.close();
    });
}
factorial(rl);
