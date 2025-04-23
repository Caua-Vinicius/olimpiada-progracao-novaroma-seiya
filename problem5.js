const readline = require("readline");

function isAnagram(string, string2) {
    // torna a string em um array
    const splitString = string.split("")
    const splitString2 = string2.split("")

    // organiza os arrays
    const sortedString = splitString.sort()
    const sortedString2 = splitString2.sort()

    // Junta os arrays em uma string novamente
    const joinedString = sortedString.join("")
    const joinedString2 = sortedString2.join("")

    // compara se as strings ficam iguais no final
    return joinedString === joinedString2
}

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

input.question('enter a list of two strings: ', (arr) => {
    // Separa as palavras e checa se recebeu duas palavras
    var list = arr.split(' ');
    if (list.length != 2) {
        console.error("Wrong size! Try again")
        process.exit(0)
    }
    console.log("isAnagram? " + isAnagram(list[0], list[1]))
    input.close();
});

