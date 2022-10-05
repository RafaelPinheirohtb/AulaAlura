//como reaproveitar a função para outros numeros?
// Parametros de função
            //2     //2
//function soma(num1, num2) {
//    return num1 + num2;
//}
// console.log(soma(2, 2));
// console.log(soma(245, 20));
// console.log(soma(-500, 60));

//Parâmetros x Argumentos

// Ordem dos parâmetros

// function nomeIdade(nome, idade) {
//     return `Meu nome é ${nome} e minha idade é ${idade} anos`;
// }

//console.log(nomeIdade('Fulano', 40))

//function soma(num1, num2) {
//  return num1 + num2;
//}

//function multiplica(numero1, numero2) {
//    return numero1 * numero2;
//}
                             //9       //6      // Resultado
//console.log(multiplica(soma(4, 5), soma(3, 3)))// = 56

//console.log(multiplica(soma(4, 5)))

//Definindo valor padrão para um argumento

function soma(numero1, numero2) {
  return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}
console.log(multiplica(soma(4, 5)))
