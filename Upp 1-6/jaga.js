
var ps = require("prompt-sync");
var prompt = ps();

Console.WriteLine("Uppgift 1");

var start = 5;
var end = 12;

let number = prompt("<Give me a number");

if (number >= start && number <= end) {
    console.log("The numb is inside the intreval");
} else {
    console.log("The numb is outside the interval");

}
