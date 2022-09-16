var ps = require("prompt-sync");
var prompt = ps();

console.log("\nUppgift 3\n");

let month = prompt("Give me a month: ").toLowerCase();
let year = prompt("Give me a year: ");

let leap_year = 29 
let normal_year = 28

if ((year%4==0)&&(year%100!=0)) {
    year = leap_year
}
else {
    if((year%400==0)&&(year%100==0)) {
        year = leap_year
    } else {
        year = normal_year
    }
}

if (month == "januari") {
    console.log("The month has 31 days.");
} else if (month == "february") {
    console.log("The month has", year, "days.");
}

else if (month == "mars") {
    console.log("The month has 31 days.");
} 

else if (month == "april") {
    console.log("The month has 30 days.");
} 

else if (month == "may") {
    console.log("The month has 31 days.");
} 

else if (month == "june") {
    console.log("The month has 30 days.");
} 

else if (month == "july") {
    console.log("The month has 31 days.");
} 

else if (month == "august") {
    console.log("The month has 31 days.");
} 

else if (month == "september") {
    console.log("The month has 30 days.");
} 

else if (month == "october") {
    console.log("The month has 31 days.");
} 

else if (month == "november") {
    console.log("The month has 30 days.");
} 

else if (month == "december") {
    console.log("The month has 31 days.");
} else {
    console.log("That is not a month.")
}