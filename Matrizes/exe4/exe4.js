
let sistemaVendas = () => {
    
    let meses = ["Janeiro", "Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
    
    let matriz = []
   
    for(let i=0;i<12;i++){ 
        matriz[i] = []
        alert(`Informe as vendas do mês ${meses[i]}`)
        for(let j=0;j<4;j++){ 
            matriz[i][j]= Number(prompt(`Informe o valor vendido na ${j+1}ª. semana `))
        }
    }
    let soma
    for(let i=0;i<12;i++){ 
        soma = 0
        for(let j=0;j<4;j++){ 
            soma = soma + matriz[i][j]
        }
        
        alert(`Total vendido no mês ${meses[i]} foi ${soma}`)
    }
}