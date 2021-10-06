let sistemaViagem = () => {

    let opcao
    let vetViagem = [] // vetor 
    
    
    do {
        opcao = Number(prompt(`Informe: \n1. Cadastrar viagem \n2. Consulta Preço médio das viagens \n3. Consulta pelo tipo de passagem \n4. Consulta viagem mais barata \n5. Sair`))
        switch(opcao){
            case 1: cadastraViagem(vetViagem)
                    break
            case 2: consultaPrecoM(vetPrecoM)
                    break
            case 3: tipoPass = prompt(`Informe o tipo da passagem`)
                    consultaTipoViagem(vetViagem, tipoPass)
                    break
            case 4: pais = prompt(`Informe o país desejado`)
                    consultaViagemBarata(vetViagem,país)
                    break
            case 5: alert(`O programa será encerrado`)
            break
    default: alert(`Opção inválida`)
        }
    }
    while (opcao != 5)
}



let cadastraViagem = (vetViagem) => {
    let objeto = {
        codigo: Number(prompt(`Informe código`)),
        país: prompt(`Informe o país`),
        cidade: prompt(`Informe cidade`), 
        preco: Number(prompt(`Informe o preço`)),
        tipoPass: prompt(`Informe tipo da passagem (áerea ou terrestre)`)

    }
    let cont = 0
    let achou = false
    
    for(let i=0; i < vetViagem.length;i++){
        if (vetViagem[i].codigo == objeto.codigo){
            achou = true // achei - não posso cadastrar      
        }
    }
    if (!achou){
         // adiciona objeto no vetor
         vetViagem.push(objeto)
        alert(`Viagem cadastrada com sucesso`)
    }
    else {
        alert(`Viagem já existe com este código`)	
    }
    cont++
    console.log(vetViagem)
}

let consultaPrecoM = (vetViagem) => {
    let result = 0
    for(let i=0;i<vetViagem.length;i++){
    
    result += vetViagem[i].preco 
    
    }
    let m = retult/ vetViagem.length
    console.log(m)
}
let consultaTipoPass = (vetViagem, tipoPass) => {
  
    let achou = false
    for(let i=0;i<vetViagem.length;i++){
        if (vetViagem[i].tipoPass == tipoPass) {
            console.log(`As viagens disponivéis para tipo de passagem ${tipoPass} são  ${vetViagem[i]} `)
            achou = true
        }
    }
    if (!achou){
        console.log(`Não contém viagens para esse tipo de passagem`)
    }
}
let consultaViagemBarata = (vetViagem, país) => {
    let mBarato = 9999999
    let vetVMBarata = []
    for(let i=0;i<vetViagem.length;i++){
        if (vetViagem[i].país ==  país) {
            if (vetorViagens[i].preco < mBarato){
                mBarato = vetViagem[i].preco
                vetVMBarata = vetViagem[i]
            console.log(`A  viagem mais barata para o País ${vetViagem[i].país} é ${vetVMBarata[i]}`)
            
            }
        }   
    }
    
}
