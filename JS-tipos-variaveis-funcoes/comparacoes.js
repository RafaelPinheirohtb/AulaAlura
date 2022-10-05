// == (comparação IMPLICITA)

const numero = 5;
const texto = '5';

console.log(numero == texto)  // implicita == true
console.log(numero === texto) // explicita === false

//typeof, descobrir o tipo de dado na variável. Retorna o tipo de dado que a variável está armazenando

console.log(typeof numero) // Retorna number
console.log(typeof texto)  // Retorna string

// == só compara o valor
// === compara o valor e o tipo de dado

//conversão explicita
Number()
String()