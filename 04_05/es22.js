function calcular (){
    let idade = Number(document.getElementById("idade").value)
    let peso = Number(document.getElementById("peso").value)
    
    let resul

    if(idade < 20){
        if(peso <= 60){
            resul = 9
        }
        else if(peso > 60 && peso <=90){
            resul = 8
        }
        else if(peso>90){
            resul = 7
        }
    }
    else if(idade >=20 && idade <=50){
   
        if(peso <= 60){
            resul = 6
        }
        else if(peso > 60 && peso <=90){
            resul = 5
        }
        else if(peso>90){
            resul = 4
        }
            }
         
               
    
   
            else if(idade>50){
   
                if(peso <= 60){
                    resul = 3
                }
                else if(peso > 60 && peso <=90){
                    resul = 2
                }
                else if(peso>90){
                    resul = 1
                }
            }
            
            alert(`Você faz parte do grupo ${resul}`)
}