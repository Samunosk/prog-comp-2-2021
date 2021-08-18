function calcular (){
    let codpro = Number(document.getElementById("codpro").value)
    let qntcomp = Number(document.getElementById("qntcomp").value)
    
    let preco , desconto,total, resul

    if(codpro >= 1 && codpro <=10){
           preco = 10        
        }
        else if(codpro>=11 && codpro <20) {
            preco = 15
        }
        else if(codpro>=21 && codpro <30) {
            preco = 20
        }
        else if(codpro>=31 && codpro <40) {
            preco = 30
        }
         total = preco * qntcomp
         if (total <= 250){
            desconto = 5/100

         }
         else if (total >250 && total <=500){
             desconto = 10/100

         }
         else {
            desconto = 15/100

        }
            resul = total - (total * desconto)
            alert(`Preço por unidade: ${preco}\nPreço total sem desconto: ${total} \nValor do desconto: ${desconto} \nResultado final: ${resul} `)
}