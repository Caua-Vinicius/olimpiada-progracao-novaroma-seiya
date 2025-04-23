const readline = require("readline");

function roundGrade(int) {
    // Checa se a nota é menor que quarenta e não arredonda
    if (int < 40) return int

    // Descobre o proximo multiplo de 5
    const nextFive = Math.ceil(int / 5) * 5

    // retorna o valor de acordo com os criterios de arredondamento
    if (nextFive - int < 3) return nextFive
    return int
}

function roundGrades(array) {
    const roundedArray = []
    // Para cada elemento de nota realiza a função de arredondamento
    array.forEach(element => {
        roundedArray.push(roundGrade(element))
    });
    return roundedArray
}

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

input.question('enter a list of grades: ', (arr) => {
    var list = arr.split(' ');
    console.log("RoundedGrades: " + roundGrades(list))
    input.close();
});