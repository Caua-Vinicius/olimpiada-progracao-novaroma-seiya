const readline = require("readline");

function isPalindron(string) {
    // torna a string em um array
    const splitString = string.split("")

    // reverte o array
    const reverseString = splitString.reverse()

    // torna o array em uma string
    const reversedString = reverseString.join("")

    // compara se o valor inicial é o mesmo do final
    return string === reversedString
}

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

input.question("string: ", function (answer) {
    console.log("is palindron? " + isPalindron(answer))
    input.close();
});