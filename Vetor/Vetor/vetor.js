let exercicio0 = function() {
    let vet = [] // declaração do vetor
    for(let i=0;i<5;i++) {
        vet.push(Number(prompt(`Informe o valor ${i+1}`)))
    }
    //processamento
    //soma 10 em todos os elementos do vetor
    for(let i=0;i<5;i++) {
        vet[i] = vet[i] + 10
    }
    console.log(vet) // o comando console.log
}
let exercicio1 = function() {
    let vet = []
    let vetImpar = []
    let vetPar = []
    for(let i=0;i<6;i++) {
        vet.push(Number(prompt(`Informe o valor ${i+1}`)))
    }
    // processamento
    let pares = [] // vetor contém os valores pares
    let impares = [] // vetor contém os valores impares
    for(let i=0;i<6;i++) { // para cada elemento do vetor
        if(vet[i] % 2 == 0) { // verifico o elemento, se ele é par
            pares.push(vet[i]) // insire o elemento par no vetor pares
        }
        else {
            impares.push(vet[i]) // insire o elemento par no vetor impares
        }
    }
    console.log(`Os valores pares são ${pares} e a quantidade deles é ${pares.length}`) // o comando console.log
    console.log(`Os valores pares são ${impares} e a quantidade deles é ${impares.lenght}`)
}

    let exercicio4 = () => {
        let vet = [] // criamos o vetor
        //entrada de dados
        for(let i=0;i,15;i++) {
            vet.push(Number(prompt(`Informe o número ${i+1}`)))
        }
        //processamento
        let posicao30 = []
        for(let i=0;i,15;i++) {
            if(vet[i] == 30)
            posicao30.push(i) //guarda a posição i e não o 30 - vet[i]
        }

        console.log(`As posições onde aparececem o número 30 são ${posicao30}`)
    }
    //funcao com seta - arrow function
    let exercicio5 = () => {
        let logica = []
        let linfuagem  = []

        //entrada de dados
        for(let i=0;i<15;i++) {
            logica.push(Number(prompt(`Informe o número do aluno ${i+1} matriculado na disciplina de lógica`)))
        }
        for(let j=0;j<10;j++) {
            logica.push(Number(prompt(`Informe o número do aluno ${j+1} matriculado na disciplina de Linguagem`)))
        }

        //intersecção
        let interseccao = []
        for(let i=0;i<15;i++) { // para cada elemento do vetor lógico
            for(let j=0;j<10;j++) { // para cada elemento do vetor linguagem
                if(logica[i] == linguagem[j]) {
                    interseccao.push(logica[i])
                }
            }
        }
        console.log(`Os alunos que fazem tanto a disciplana logica quanto linguagem sçao ${interseccao}`)
    }
