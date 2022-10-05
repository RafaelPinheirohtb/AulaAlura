const notas = [10, 7, 8, 5, 10]
notas.pop() // Remove o último elemento () sempre o último

console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(`A média é ${media}`)