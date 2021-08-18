function mp(){ 
    let nota1 = Number(document.getElementById("nota1").value)
    
    let nota2 =  Number(document.getElementById("nota2").value)

   
    let valt = ((nota1*2)+(nota2*3))/5

    document.getElementById("resultado").innerHTML= valt.toFixed(2) 

    
    
}