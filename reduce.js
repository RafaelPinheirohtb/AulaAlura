const numeros = [43, 50, 65, 12];
//const soma = numeros.reduce((acum, atual) => atual + acum, 0); // 1ª forma de escrever o .reduce

// const soma = numeros.reduce(function (acum, atual) { // 2ª forma de escrever o .reduce
//     return atual + acum;
// }, 0)

function operacaoNumerica(acum, atual) { // 3ª forma de escrever o .reduce
    return atual + acum;
}

const soma = numeros.reduce(operacaoNumerica, 0);

console.log(soma); // Mesmo resultado = 170