let gerenciaRedesSociais=() =>{
let vetorRedes= []

for(let i=0;i<5;i++){
    let redesocial = {
        codigo : Number (prompt( `Insira o código da rede social: `)),
        nome : prompt( `Insira o nome da rede social: `),
        link: Number(prompt( `Insira o link da rede social: `))
        
        }
        vetorRedes.push(redesocial)
}

let vetorUser= []

for(let i=0;i<5;i++){
    let usuario = {
        codigoredesocial : Number(prompt( `Insira o código da rede social: `)),
        login : prompt( `Insira o seu login: `),
        nome : prompt( `Insira o nome do usuario: `),
        qtdeposts: Number(prompt( `Insira a quantidade de posts: `))
        
        }

        let achou = false
        let = j
        while(!achou && j<5){
            if(vetorRedes[j].codigo == usuario.codigoredesocial){
            vetorUser.push(usuario)
            achou = true
            alert(`Usuário Inserido com sucesso`)
            }
            j++
        }
        if(!achou){
            alert(`Usuário não inserido, rede social não encontrada`)
        }

}
}