
let tarefas = []   //array vazio


if (localStorage.hasOwnProperty("tarefas")) {
    tarefas = JSON.parse(localStorage.getItem("tarefas"))
  } //verifica se já tem um array com a kay "tarefas" no localstorage.Se tiver, já carrega o array "tarefas" vazio com os dados que estavam armazenados no localstorage


if(tarefas == 0){
    let limpar = document.getElementById("limpar")
    let h2 = document.getElementById("h2")
    
    limpar.style.display = "none"
    h2.style.display = "none"
}//esconde o botão limpar tudo e o H2

  
console.log(tarefas)

novaTarefa = function(){
    let tarefa1 = document.getElementById("tarefa")
    let nome1 = document.getElementById("nome")
   
    if(tarefa1.value.length == 0 || nome1.value.length == 0){
        alert("[ERRO]Coloque um nome e uma Tarefa")
    }else{  
        tarefas.push({nome:nome1.value, fazer:tarefa1.value})
   
        localStorage.setItem("tarefas", JSON.stringify(tarefas)) 
    
        location.reload()     
  }
} // função para adicionar items dentro do array "tarefas" e salvar as alterações no local storage


let adicionar = document.getElementById("adicionar")
adicionar.addEventListener("click", novaTarefa)









for(i=0; i < tarefas.length; i++){
    let res = document.getElementById("res")



    let resposta = document.createElement("div")
    resposta.innerHTML += `<strong>${tarefas[i].nome}:</strong> ${tarefas[i].fazer}`
    resposta.setAttribute("class","res")
    resposta.setAttribute("id",length++)
    res.appendChild(resposta) 
    //vai criar uma div para mostrar os items dentro do array "tarefas"
    
    


    let excluir = document.createElement("input")
    excluir.setAttribute("type","Button")
    excluir.setAttribute("class", "botaoPadrao excluir")
    excluir.value = "Excluir"
    resposta.appendChild(excluir)
    excluir.addEventListener("click",apagar = function(){
        

        //res.removeChild(resposta)

        /* Eu tentei de todos os jeitos retirar um elemento especifico da lista (tarefas que está no localstorage) mas não consegui, ele sempre tirava o ultimo item adicionado.
        Então usando o removeChild eu consegui remover a div q aparecia os item da lista, mas não consigo salvar essas alterações no local storage, se recarregar a pagina o item da lista retorna
            */


        tarefas.splice(resposta.id, 1)
        localStorage.setItem("tarefas", JSON.stringify(tarefas))
        location.reload()

     /* ESQUECE O ULTIMO COMENTÁRIO, FINALMENTE CONSEGUI. EU TO MUITO FELIZ AAAAAAAAEEEEEE!!!!!!!! */
    })
    
    
    
    let concluir = document.createElement("input")
    concluir.setAttribute("type","button")
    concluir.setAttribute("value","concluir")
    resposta.appendChild(concluir)
    concluir.setAttribute("class","botaoPadrao concluir")
    concluir.addEventListener("click", terminar=function(){

        if(concluir.value === "concluir"){
            concluir.value = "Refazer"
            resposta.setAttribute("class", "botaoConcluir")
            concluir.setAttribute("class","refazer botaoPadrao")
        }else{
            resposta.setAttribute("class", "res")
            concluir.value = "concluir"
            concluir.removeAttribute("class","refazer")
            concluir.setAttribute("class","botaoPadrao concluir")
         //O código acima esta funcionando bem, mas eu não sei como salvar as alterações do css no localStorage, se recarregar a pagina some tudo

        }



        

        

        

    })
    
}

limpar = function(){
    localStorage.clear()
    location.reload()
}
let limparBotao = document.getElementById("limpar")
limparBotao.addEventListener("click", limpar)











