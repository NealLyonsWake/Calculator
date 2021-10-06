// Calculator to run when the /compute server is actioned on submit of the userForm
function calculator(number1, number2, operation) {
    const num1 = parseFloat(number1)
    const num2 = parseFloat(number2)
    switch (operation) {
        case "add": return `<h2>${num1} + ${num2} = ${add(num1, num2)}</h2>`;
        case "subtract": return `<h2>${num1} - ${num2} = ${subtract(num1, num2)}</h2>`; 
        case "multiply": return `<h2>${num1} * ${num2} = ${multiply(num1, num2)}</h2>`; 
        case "divide": return `<h2>${num1} / ${num2} = ${divide(num1, num2)}</h2>`; 
    }    
}

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

module.exports = calculator