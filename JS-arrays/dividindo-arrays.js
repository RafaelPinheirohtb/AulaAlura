const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjore', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']
                 //indice 0
const sala1 = nomes.slice(0, nomes.length/2)// .slice mostra o que está no array
                        // começa no indice 10
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da Sala 1: ${sala1}`)
console.log(`Alunos da Sala 2: ${sala2}`)