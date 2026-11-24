/*
Full Name: Harold Canilang
Section: IV-BSIT-A
Activity Code: n2-calculator
Date: November 19, 2026
*/

//mag aadd 
function add(a, b) {
    return a + b;
}
//magsusubstract
function subtract(a, b) {
    return a - b;
}
//magmumutiply
function multiply(a, b) {
    return a * b;
}
//magdidivide
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }

    return a / b;
}

function average(numbers) {
    let total = 0;
    //pagsasamahin lahat ng numbers para makuha ung total
    for (let number of numbers) {
        total += number;
    }

    //divide ung total kung ilan ung bilang ng numbers
    return total / numbers.length;
}

// I-export ang functions para magamit sa ibang JavaScript file
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    average
};
