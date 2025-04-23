const readline = require("readline");
function factorial(n) {
    let value = 1

    // percorre o valor total até um e realizando a multiplicação
    for (let i = n; i > 1; i--) {
        value = value * i
    }
    return value
}

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

input.question("number: ", function (answer) {
    console.log("factorial: " + factorial(answer))
    input.close();
});