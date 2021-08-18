function calcular (){
    let preco = Number(document.getElementById("preco").value)
    let categoria = Number(document.getElementById("categoria").value)
    if(document.getElementById("R").checked){
        situacao = "R"
    }
    else{
        situacao = "N"
    }
    alert(situacao)
    let aumento

    if(preco <= 25){
           switch (categoria){
               case 1: aumento = (5*preco)/100
               break
               case 2: aumento = (8*preco)/100
               break
               case 3: aumento = (10*preco)/100
               break
           }     
        }
        else{
            switch (categoria){
                case 1: aumento = (12*preco)/100
                break
                case 2: aumento = (15*preco)/100
                break
                case 3: aumento = (18*preco)/100
                break
            }  
        }
        let imposto

        if ((categoria == 2)||(situacao == 'R')){
            imposto = (5*preco)/10
        }
        else{
            imposto = (8*preco)/10
        }
        let novo = preco + aumento - imposto
         if (novo <= 50){
            classificacao = "barato"
        }
       else if (novo <= 120){
            classificacao = "normal"
        }
        else{ classificacao = "caro"
        }
        document.getElementById("aumento").innerHTML = aumento
        document.getElementById("imposto").innerHTML = imposto
        document.getElementById("novo").innerHTML = novo
        document.getElementById("classificacao").innerHTML = classificacao
}