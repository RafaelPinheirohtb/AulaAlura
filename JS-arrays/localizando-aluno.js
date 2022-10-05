const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediaDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

const exibiNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) { // .includes retorna verdadeiro ou falso (v ou F = Booleano)
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno) // .indexOf retorna o número do índice 
        return listaDeNotasEAlunos[0][indice] + ', sua média é: ' + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não cadastrado."
    }
}

console.log(exibiNomeNota('Ana')) // resposta: Ana, sua média é: 6
console.log(exibiNomeNota('Juliana')) // resposta: Juliana, sua média é: 7
console.log(exibiNomeNota('Nemo')) // resposta: Aluno não cadastrado.