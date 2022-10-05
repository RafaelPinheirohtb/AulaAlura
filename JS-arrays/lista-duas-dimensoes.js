
// índice         0        1         2       3
const alunos = ['João', 'Juliana', 'Caio', 'Ana']

// índice               0  1 2 3
const mediaDosAlunos = [10,7,9,6]

// índice                     0          1
let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

// Resposta: João, sua média é: 10
console.log(`${listaDeNotasEAlunos[0][0]}, sua média é: ${listaDeNotasEAlunos[1][0]}`)