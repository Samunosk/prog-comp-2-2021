function calcular (){
    let nr01 = Number(document.getElementById("nr01").value)
    let nr02 = Number(document.getElementById("nr02").value)
    let op = Number(document.getElementById("op").value)

    let resultado
    switch (op) {
        case 1:
            resultado = (nr01+nr02)/2
            break;
    
            case 2:
                if (nr01>nr02){
                    resultado = nr01 - nr02
                }
                else {
                    resultado = nr02 - nr01
                }
        
            break;
            
            case 3:
                resultado = nr01 *nr02
                break;
                case 4:
                    if(nr02 != 0){
                        resultado = nr01/ nr02
                    }
                    else{
                        resultado = "Não pode dividir por 0"
                    }
                    break;
                    default:
                        resultado = "Opção inválida"
                    break
    }
    
  
    alert(`Resultado é ${resultado}`)
}