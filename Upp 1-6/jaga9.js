var ps = require("prompt-sync");
var prompt = ps();

console.log("\nUpp.9\n");

let side_a = prompt("Ge mig sida a för triangeln: ").toLocaleLowerCase
let side_b = prompt("Ge mig sida b för triangeln: ").toLocaleLowerCase
let side_c = prompt("Ge mig sida c för triangeln: ").toLocaleLowerCase

if (side_a < side_b + side_c && side_b < side_a + side_c && side_c < side_a + side_b) {
    console.log("Triangeln är rimlig!!");
}

else {
    console.log("Ena sidan av triangeln är större än de andra därför är triangeln orimlig.");
}