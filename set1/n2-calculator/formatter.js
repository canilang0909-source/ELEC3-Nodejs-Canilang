/*
Full Name: Harold Canilang
Section: IV-BSIT-A
Activity Code: n2-calculator
Date: November 19, 2026
*/

function formatResult(operation, numbers, result) {
    // Default symbol ng addition (+)
    let symbol = "+";

    // Ito ung mga other operators 
    if (operation === "subtract") {
        symbol = "-";
    } else if (operation === "multiply") {
        symbol = "*";
    } else if (operation === "divide") {
        symbol = "/";
    }

    // Dito na ilalabas ung result
    return `${numbers.join(` ${symbol} `)} = ${result}`;
}

// I-export ung function para magamit sa ibang file
module.exports = formatResult;
