let vetor= []

for(let i=0;i<4;i++){
    let periferico = {
        nome : prompt( `Insira o nome do periferico:`),
        marca : Number(prompt( `Insira a marca do periferico: `)),
        botao : Number(prompt( `Insira o numero de botões do periferico: `)),
        preco : Number(prompt( `Insira o preço do periferico: `))
        }
        vetor.push(periferico)
}
let soma = 0

for(let i=0; i<4; i++){
    soma += vetor[i].preco
}

console.log(`A média é de ${soma/4}`)