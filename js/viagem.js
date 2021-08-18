function somar () {
    let pedagioform1 = document.getElementById("pedagio1").value
    let pedagioform2 = document.getElementById("pedagio2").value
    let valcombform = document.getElementById("valcomb").value

    let total = parseInt(pedagioform1)+parseInt(pedagioform2)+parseInt(valcombform)

    let labelresultado= document.getElementById("lbResultado").innerHTML= total.toFixed(2)
    
}