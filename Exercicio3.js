function calc(){ 
    let kmV= Number(document.getElementById("kmV").value)
    
    let kmT=  Number(document.getElementById("kmT").value)

    let kmVal =  Number(document.getElementById("kmVal").value)


    let valt = (kmV/kmT)*kmVal

    alert(`O Valor gasto é de: R$ ${valt.toFixed(2)} `) 

   
    
}
