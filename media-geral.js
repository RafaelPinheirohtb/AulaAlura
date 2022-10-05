const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 5, 9.5];

// Criar uma finção para calcular a média de todas as salas

function mediaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0);
    return somaDasNotas / notasDaSala.length;
}

console.log(`Média da sala de JavaScript ${mediaSala(salaJs)}`);
console.log(`Média da sala de Java ${mediaSala(salaJava)}`);
console.log(`Média da sala de Python ${mediaSala(salaPython)}`);

// Outro exemplo
const notas = [10, 6.5, 8, 7];

const media = notas.reduce((acum, atual) => atual + acum, 0) / notas.length;

console.log(media); // Retorna 7.875
