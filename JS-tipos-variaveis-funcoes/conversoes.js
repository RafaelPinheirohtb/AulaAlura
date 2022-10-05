// tipo de dados
// booleanos

// conversão implicita
const numero = 456;
const numeroString = '456';// ou const numeroString = Number('456');

//console.log(numero === numeroString)
//console.log(numero == numeroString) // == comparação, numero com string nesse caso
//console.log(numero + numeroString) // resultado = 456456

// conversão explicita
// Numer()
// String()
console.log(numero + Number(numeroString))