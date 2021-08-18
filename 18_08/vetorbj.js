let gerenciaRedesSociais = () => {
    // cadastro das redes sociais
    let vetorRedesSociais = []
    for(let i=0;i<5;i++){
        let objeto = {
            codigo: Number(prompt(`Informe código da rede social`)),
            nome: prompt(`Informe nome da rede social`),
            url: prompt(`Informe url da rede social`)
        }
        // inserir objeto no vetor
        vetorRedesSociais.push(objeto)
    }
    // cadastro dos usuários
    let vetorUsuarios = []
    let i = 0
    while (i<5){
        let objeto = {
            login: prompt(`Informe o login do usuário`),
            nome: prompt(`Informe o nome do usuário`),
            codigoRedeSocial: Number(prompt(`Informe o código da rede social`)),
            qtdePosts: Number(prompt(`Informe a qtde de Posts`))
        }
        // só faremos isso se a rede social existir
        let achou = false // assumo que não encontrei a rede social
        let j = 0 // índice do vetor de redes sociais
        while (!achou && j<5 ){ // sai ou porque achou ou porque acabou o vetor
            if (vetorRedesSociais[j].codigo == objeto.codigoRedeSocial){ // achamos
                vetorUsuarios.push(objeto)// inserimos
                achou = true
                alert(`Usuário inserido com sucesso`)
            }
            j++ // prepara para ir ao próximo elemento
        }
        if (!achou){ // acabou o vetor
            alert(`Usuário não inserido, pois a Rede social não foi encontrada`)
        }
        i++
    }

  // cadastro dos usuários
  /*
  let vetorUsuarios = []
  let i = 0
  while (i<5){
      let objeto = {
          login: prompt(`Informe o login do usuário`),
          nome: prompt(`Informe o nome do usuário`),
          codigoRedeSocial: Number(prompt(`Informe o código da rede social`)),
          qtdePosts: Number(prompt(`Informe a qtde de Posts`))
      }
      // só faremos isso se a rede social existir
      let achou = false // assumo que não encontrei a rede social
       // índice do vetor de redes sociais
      for(let j = 0; j < 5; j++ ){ // sai ou porque achou ou porque acabou o vetor
          if (vetorRedesSociais[j].codigo == objeto.codigoRedeSocial){ // achamos
              vetorUsuarios.push(objeto)// inserimos
              achou = true
              alert(`Usuário inserido com sucesso`)
              break // sai do for
          }
      }
      if (!achou){ // acabou o vetor
          alert(`Usuário não inserido, pois a Rede social não foi encontrada`)
      }
      i++
    }*/
   
        //EX1
        let codigo = Number(prompt(`Informe o código:`))
        let conta = 0
        for(let i=0;i<5;i++){
            if(vetorUsuarios[i].codigoRedeSocial == codigo){
                conta = conta + vetorUsuarios[i].qtdePosts
            }

        }
        if (conta == 0){
            console.log(`Não houve postagem ou rede social não existe`)
        }
        else{
            console.log(`A qtde de post na rede social ${codigo} é ${conta}`)
        }
        //EX2
        for(let i=0;i<5;i++){
            let conta = 0
            for(let j=0;j<5;j++){
                if(vetorRedesSociais[i].codigo == vetorUsuarios[j].codigoRedeSocial){
                conta = conta + vetorUsuarios[i].qtdePosts
                 }
            }
            console.log(`A qtde de post da rede social ${vetorRedesSociais[i].codigo} é ${conta}`)
        }
        //EX3
}