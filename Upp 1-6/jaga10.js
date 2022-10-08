var ps = require("prompt-sync");
var prompt = ps();

console.log("\n Upp.10 \n")

let electricity = prompt("Hur många kW har används?");

var kW50to150 = electricity - 50;
var kW150to250 = electricity - 150;
var kW250andup = electricity - 250;

if (electricity <= 50) {
    console.log("Priset för den använda elen är...", electricity * 0,88, " kr")
}

else if ((electricity > 50) && (electricity <= 150)) {
    console.log("Priset för den använda elen är...", (electricity * 0,88) + (kW50to150 * 1,02), " kr")
}

else if ((electricity > 150) && (electricity <= 250)) {
    console.log("Priset för den använda elen är...", (electricity * 0,88) + (kW50to150 * 1,02) + (kW150to250 * 1,33), " kr")
}

else if (electricity > 250) {
    console.log(("Priset för den använda elen är...", (electricity * 0,88) + (kW50to150 * 1,02) + (kW150to250 * 1,33) + (kW250andup * 1,78)) * 1.22, " kr")
}



