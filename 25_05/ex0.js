let exercicio0 = function(){
    let soma = 0
    let i = 1

    while (i <= 10){
        let nota = Number(prompt(`Informe a nota`))
        soma = soma+ nota
        i++
    }
    let media = soma/10
    alert(`A media das notas e: ${media}`)
}
let exercicio1 = function(){
    let a , b ,c ,d ,aux
    let contador = 1
    while (contador <=5){
a = Number(prompt(`Informe o numero de a`))
b = Number(prompt(`Informe o numero de b`))
c = Number(prompt(`Informe o numero de c`))
d = Number(prompt(`Informe o numero de s`))

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
let exercicio2 = function(){
    let qtde = 120
    let lucro
    let saida = ""
    let maiorlucro = 0
    let maiorqtde =0
    let maiorpreco=0
    for(let preco = 5.0; preco >=1.0;preco= preco-0.50){
        lucro =( preco * qtde)- 200
        if(lucro > maiorlucro){
            maiorlucro = lucro
            maiorqtde = lucro
            maiorpreco = lucro
        }
        saida= saida + `<tr> <td> R$ ${preco.toFixed(2)} </td>  <td> ${qtde} </td> <td> R$ 200.00 </td> <td> R$ ${lucro.toFixed(2)} </td> </tr>`

        qtde = qtde + 26
    } 
    document.getElementById("corpo").innerHTML = saida
    alert(`Maior Lucro ${maiorlucro} com qtde ${maiorqtde} com preco ${maiorpreco}`)
    
}
let exercicio3 = function(){
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

let exercicio6= function(){
    let valor
    let tipo
    let totalvista = 0
    let totalprazo = 0
    
    for(let i=1; i<=15;i++){

        valor = Number(prompt(`informe o valor da transacao ${i}`))
        tipo = prompt(`informe o tipo ( V= a vista , P = prazo) da transacao ${i}`).toUpperCase()
        if(tipo == 'V'){
                totalvista = totalvista + valor
        }
        else if(tipo == 'P'){
            totalprazo = totalprazo + valor
        }
    }
   let totalgeral = totalvista + totalprazo
    
   let parcela = totalprazo / 3

   alert (`Total a vista ${totalvista} - Total a prazo ${totalprazo} - Total Geral ${totalgeral} - 1a. parcela à prazo ${parcela}`)

}
let exercicio21=function(){
      let voto, qtde1=0 ,qtde2=0, qtde3=0, qtde4=0, qtdebranco=0, qtdenull=0; 
      voto = Number(prompt(`Informe voto`))
      do{
          switch(voto){
              case 1: qtde1++
              break
              case 2 : qtde2++
              break
              case 3 : qtde3++
              break
              case 4 : qtde4++
              break
              case 5 : qtdebranco++
              break
              case 6 : qtdenull++
              break
              
          }
          voto= Number(prompt(`Informe um novo voto . Digite 0 para encerrar`))

      } 
      while(voto != 0)
      let total
      total = qtde1 + qtde2 + qtde3 + qtdebranco + qtdenull

      console.log(`Cand1 ${qtde1} - Cand2 ${qtde2} -Cand3 ${qtde3} - Cand4 ${qtde4}`)
      console.log(`Votos nulos ${qtdenull} - Porcentutal votos nulos ${qtdenull / total *100}`) 
      console.log(`Votos brancos ${qtdebranco} - Porcentutal votos brancos${qtdebranco / total *100}`)     
}

let exercicio23 = function(){
        let opcao
        let salario
        do{
            opcao= Number(prompt(`Digite \n 1.Novo Salário \n 2. Férias \n 3.Décimo Tarceiro \n 4.Sair`))
            switch(opcao){
                case 1: salario = Number(prompt(`Informe o Salário`))
                        if(salario< 2100){
                            alert(`Novo salário ${salario + salario*15/100}`)
                        }
                        else if ((salario > 2100) && (salario <= 6000)){
                            alert(`Novo salário ${salario + salario*10/100}`)
                        }
                        else{
                            alert(`Novo salário ${salario + salario*5/100}`)
                        }

                    break
                case 2: salario = Number(prompt(`Informe o Salário`))
                       alert(`O valor das férias é ${salario + 1/3 *salario}`)
                    break  
                case 3: salario = Number(prompt(`Informe o Salário`))
                        let meses = Number(prompt(`Informe número de meses trabalhos`))
                        alert(`Décimo terceiro a receber ${salario * meses/12}`)
                    break   
                case 4: alert(`Programa encerrado`)
                    break   
                default: alert(`Opção inválida. Tente Novamente !!!`)
            }
        }
        while (opcao != 4)

}
let exercicio3= ()=>{
    let vet1=[]
    let vet2=[]
    //entrada de dados
    for(let i=0;i<10;i++)
    {
        vet1.push(Number(prompt(`Informe o código do produto`)))
        vet2.push(Number(prompt(`Informe a quantidade do produto${vet1[i]} em estoque`)))
    }
    //faremos as compras
    let codigoCliente=Number(prompt(`Informe o código do cliente`))
    do{
        //pede código pra compra
        let codigo=prompt(`Informe o codigo do produto para compra`)
        let achou=false
        //verifica se o código existe
        for(let i=0;i<10;i++)
        {
            if(vet1[i] == codigo)
            {
                achou=true
                let qtded=Number(prompt(`informe a qtde para compra`))
                if(qtded<=vet2[i])
                //se tem em estoque, atualizá-o
                vet2[i]=vet2[i]-qtde
            }
            else{
                alert(`Infelizmente, não temos o produto em estoque`)
            }
        }
        if(achou==false){
            alert(`infelizmente, não temos o produto`)
        }
        codigoCliente=Number(prompt(`Informe o código do cliente para a próxima compra. Informe o para encerrar`))
        //se existe, pede qtde para comprar
        //se tem em estoque, atualizá-o

        códigoCliente=Number(prompt(`Informe o código do cliente para a próxima compra. Informe 0 para encerrar`))

    }
    while(codigoCliente!=0)
    console.log(`O valor do estoque é ${vet2}`)

}
