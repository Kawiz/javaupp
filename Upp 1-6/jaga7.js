var ps = require("prompt-sync");
var prompt = ps();

const Jämnanummer = ["2", "4", "6", "8"];
const Ojämnanummer = ["1", "3", "5", "7", "9"];

const vokaler = ["a", "e", "i", "o", "u", "y"];
const konstanter = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];

const storavocaler = ["A", "E", "I", "O", "U", "Y"];
const storakonstanter = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"];

const småvokaler = ["a", "e", "i", "o", "u", "y"];
const småkonstanter = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];


let charakter = prompt("Ge mig en charakter: ");

if (Jämnanummer.includes(charakter)) {
    console.log("Du skrev ett jämntnummet.");
}

else if (Ojämnanummer.includes(charakter)) {
    console.log("Du skrev ett ojämntnummer.");
}

else if (storavocaler.includes(charakter)) {
    console.log("Du skrev en storvocal.");
}

else if (storakonstanter.includes(charakter)) {
    console.log("Du skrev en storkonstant.");
}

else if (småvokaler.includes(charakter)) {
    console.log("Du skrev en litenvokal.");
}

else if (småkonstanter.includes(charakter)) {
    console.log("Du skrev en litenkonstant.");
}

else {
    console.log("Du skrev ett speciellt tecken")
}