let vetor = [1,2,3,4,5]
vetor.forEach((elemento) =>{
    console.log(elemento)
})

let vetor2 = [10,20,30,40,50]
vetor2.forEach((elemento,posicao) =>{
    console.log(`Valor ${elemento} e sua posição ${posicao}` )
})

let vetor3 = [10,20,30,40,50]
vetor3.forEach((elemento,posicao) =>{
    if (posicao % 2 ==0){
    console.log(`Valor ${elemento} e sua posição ${posicao}` )
}
})
let filmes = [
    {
        nome: "Vingadores",
        ano: 2018,
        classificacao: "aventura"
    },
    {
        nome:"Batman",
        ano:2019,
        classificacao: "suspense"
    },
    {
        nome: "Xmen",
        ano: 2020,
        classificacao: "ficção"
    }
]
filmes.forEach((elemento) =>{
    console.log(`Nome do filme ${elemento.nome}, Ano:${elemento.ano}, Tipo do filme: ${elemento.classificacao}`)
}

)

//next
let vetor4 = [9,8,7,6,5,]
vetor4=vetor4.map((elemento)=>{
    return Math.pow(elemento,2)
}
)
console.log(vetor4)

//reduce
let vetor5 = [5,9,12,15,18]
let soma = vetor5.reduce((total,elemento)=>{
    return total + elemento
})

//exemplo da func filter
let vetor7 = [6,9,3,7,10]
let pares = vetor7.filter ((elemento) =>{
    return elemento % 2 == 0
})
console.log(pares)

let carros = ["BMW","Volvo","Mini"];
for (let elemento of carros){
    console.log(`${elemento}`)
}
