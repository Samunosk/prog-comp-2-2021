function principal(){
    
    let opcao
    let idade
    let peso, altura
    do {
        opcao = Number(prompt(`Digite 1. F1 2. F2 3. F3 4. Sair`))
        switch(opcao){
            case 1: idade = Number(prompt(`Informe sua idade`))
                    idade = f1(idade)
                    break
            case 2: peso = Number(prompt(`Informe seu peso`))
                    f2(idade, peso)
                    break
            case 3:  idade = Number(prompt(`Informe sua idade`))
                    peso = Number(prompt(`Informe seu peso`))
                    altura = Number(prompt(`Informe sua altura`))
                    f3(idade, peso, altura)
                    break
            case 4: alert(`Programa será encerrado`)
                    break
            default: alert(`Opção inválida`)
        }
    }
    while (opcao != 4 )
    
}

function f1(idade){
   
     alert(`Valor de idade ${idade}`)
     idade = idade + 10
     return idade 
}

function f2(idade, peso){
     alert(`Valor de idade ${idade} e do peso ${peso}`)
}

function f3(idade, peso, altura){
    alert(`Valor de idade ${idade}, valor do peso ${peso} e valor da altura ${altura}`)
}