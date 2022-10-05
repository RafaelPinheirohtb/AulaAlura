function minhaFuncao(param) {
    //bloco de código
}

// minhaFuncao("param") = chama a função com ou sem parametros inseridos nela.

//Expressão de função

//const soma = function(num1, num2) {return num1 + num2}
//console.log(soma(1, 1)) // Retorno = 2

//__________________________________________________________________

// Diferença principal???
// Funçoes e var são listados no topo(puxa para o topo do arquivo)

console.log(apresentar())

function apresentar() {
    return 'Olá!';
}

console.log(soma(1, 1)) //Retorno ERRO: Não consegue acessar SOMA antes da função.
const soma = function(num1, num2) {return num1 + num2}
