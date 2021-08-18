function exercicio0(){
    let soma = 0
    let i = 1

    while (i <= 10){
        let nota = Number(prompt(`Informe a nota`))
        soma = soma+ nota
        i++
    }
    let media = soma/10
    alert(`A média das notas é ${media}`)
}
function exercicio1(){
    let a , b ,c ,d ,aux
    let contador = 1
    while (contador <=5){
a = Number(prompt(`Informe o maler de a`))
b = Number(prompt(`Informe o maler de b`))
c = Number(prompt(`Informe o maler de c`))
d = Number(prompt(`Informe o maler de s`))

let i = 1
while(i <=3){
    if(a > b){
        aux = a
        a= b
        b = aux
    }
    if(b > c){
        aux = b
        b= c
        c = aux
    }
    if(c > d){
        aux = c
        c= d
        d = aux
    }
    i++
}
alert(`Ordem crescente ${a} ${b} ${c} ${d} e a ordem decrescente ${d} ${c} ${b} ${a} `)
contador ++
}
}
function exercicio2(){
    let qtde = 120
    let lucro
    let saida = ""
    for(let preco = 5.0; preco >=1.0;preco= preco-0.50){
        lucro =( preco * qtde)- 200
        saida= saida + `\nPreço: ${preco} Qtde: ${qtde} Despesa: 200 Lucro: ${lucro} `

        qtde = qtde + 26
    }
    alert (saida)
    
}
function exercicio3(){
    let i = 1
    let f1 = 0
    let f2 = 0
    let f3 = 0
    let f4 = 0
    let f5 = 0
    while(i<=8){
        let idade = Number(prompt(`Informe a idade ${i}`))
        if (idade <= 15){
            f1++
        }
        else if ((idade > 15)&& (idade<=30)){
            f2++
        }
        else if ((idade > 30)&& (idade<=15)){
            f3++
        }
        else if ((idade > 45)&& (idade<=60)){
            f4++
        }
        else  {
            f5++
        }
        i++
    }
    alert(`Faixa 1 ${f1} Faixa 2 ${f2} Faixa 3 ${f3} Faixa 1 ${f4} Faixa 1 ${f5} % F1 ${f1/8*100} % F5 ${f5/8*100}`)
}
