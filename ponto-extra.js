const notas = [10, 9, 8, 7, 6]

// const notasAtualizadas = notas.map( nota => nota + 1)

//console.log(notasAtualizadas) // Retorna [ 11, 10, 19, 8. 7] *Não existe nota 11

const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota) //Primeiro soma 1 (++nota) e depois retorna a nota

console.log(notasAtualizadas) //Retorna [ 10, 10, 9, 8, 7]

// Função .map Retorna uma nova array