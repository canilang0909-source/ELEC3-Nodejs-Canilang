/*
Full Name: Harold Canilang
Section: IV-BSIT-A
Activity Code: n2-calculator
Date: November 19, 2026
*/

const operations = require("./operations");
const formatResult = require("./formatter");
const os = require("os");

// Kunin ung operations at numbers sa terminal
const operation = process.argv[2];
const numbers = process.argv.slice(3).map(Number);

// I-check kung may numbers at valid ung mga input
if (numbers.length === 0 || numbers.some(isNaN)) {
    console.log("Error: Please enter valid numbers.");
    process.exit(1);
}

// I-check kung existing ung operation sa operations file
if (!operations[operation]) {
    console.log("Error: Unknown operation.");
    process.exit(1);
}

let result;

// Yung average is puwedeng gumamit ng maraming numbers,
// pero ung ibang operations is exactly two numbers lang
if (operation !== "average" && numbers.length !== 2) {
    console.log("Error: Please enter exactly two numbers.");
    process.exit(1);
}


try {
    // Piliin kung average o ibang mathematical operation ung gagamitin
    if (operation === "average") {
    result = operations.average(numbers);
} else {
    result = operations[operation](...numbers);
}
    //Final results
    console.log(formatResult(operation, numbers, result));

} catch (error) {
    //pag may problem sa calculations
    console.log("Error:", error.message);
}

//ididisplay kung anong operating system ung ginamit
console.log("Operating System:", os.platform());
