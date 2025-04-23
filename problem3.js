const readline = require("readline");

function fibonatti(n) {
    //Define os dois primeiros valores da sequência como 1 (o comum para a sequência)
    const array = [1, 1];
    //realiza a somo dos dois ultimos e adiciona na sequência
    for (i = 2; i < n; i++) {
        const number = array[i - 2] + array[i - 1]
        array.push(number)
    }

    return array
}

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

input.question("How many number you wish to see? ", function (answer) {
    console.log("boom: " + fibonatti(answer))
    input.close();
});