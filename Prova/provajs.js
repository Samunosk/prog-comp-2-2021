
let exercicio1=function(){ //inicializando função
    let voto, qtde1=0 ,qtde2=0, qtde3=0, qtde4=0, qtdetntfaz=0; //Váriaveis que serão usadas no programas
    voto = Number(prompt(`Informe voto \n1. Entrega apenas pelo AVA \n2. Entrega apenas em papel \n3. Entrega apenas pelo WhatsApp \n4. Entrega apenas por email. \n5. Tanto faz`)) //prompt para entrada dos votos
    // utilizarei um "do" para realizar o looping enquanto o usuário não entrar com o número 0
    do{     
        // o "switch" será usado para entrar com a condição EX: caso o usuário digite 1 será acrescentado na variavel qtde1
        switch(voto){
            case 1: qtde1++
            break
            case 2 : qtde2++
            break
            case 3 : qtde3++
            break
            case 4 : qtde4++
            break
            case 5 : qtdetntfaz++
            break
            
            
        }
        // condição caso entre com número maior que 5
        if(voto > 5){
            console.log(`Voto inválido do esperado`)
        }
        // após isso será repetido essa mensagem até que o usuário entre com 0
        voto= Number(prompt(`Informe um novo voto . Digite 0 para encerrar`))

    } 
    
    while(voto != 0) // condição de parada
    //variaveis total e porcentagem
    let total
      total = qtde1 + qtde2 + qtde3 + qtde4 + qtdetntfaz
      let p 
      p = qtdetntfaz / total * 100
    //console final
    //Letra A
    console.log(`Opção 1 = ${qtde1}\nOpção 2 = ${qtde2}\nOpção 3 = ${qtde3}\nOpção 4 = ${qtde4} `)
    //Letra B
    console.log(`Votos tanto faz = ${qtdetntfaz} \nPorcentutal votos tanto faz = ${p}%`)   
    // sistema descrescente
    //Letra C
    let descrescente = [
        qtde1 , qtde2 , qtde3 , qtde4 , qtdetntfaz
    ];
    descrescente.sort((a,b)=>b-a)
    console.log(` ${descrescente} `)
    
    
}

let exercicio2 = function(){
    let n =[]
    let mj
    let mt
    
}