var ps = require('prompt-sync')
var prompt = ps();

let num1;
let num2;
let num3;

num1 = prompt("Insert a random number: ");
num2 = prompt("Insert another random number: ");
num3 = prompt("Insert another random number: ");


var numArray = [num1, num2, num3];
numArray = numArray.sort(function (a, b) {  return a - b;  });

    console.log(numArray)

if (num3 => num1) {
    console.log("växande");
}
else {
    if ((num3 <= num1));
}