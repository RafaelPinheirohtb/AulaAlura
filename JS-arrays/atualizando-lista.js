const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjore', 'Leo']

// .splice apartir do índice 1, remove 2 elementos e adiciona 'Rodrigo'
//listaDeChamada.splice(1,2,'Rodrigo')

// No índice 2, remove 0 elementos e adiciona 'Rodrigo'
listaDeChamada.splice(2,0,'Rodrigo')

console.log(`Lista de chamada: ${listaDeChamada}`)