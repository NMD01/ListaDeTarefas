
let tarefas = []


if (localStorage.hasOwnProperty("tarefas")) {
    tarefas = JSON.parse(localStorage.getItem("tarefas"))
  }

  
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
}

let adicionar = document.getElementById("adicionar")
adicionar.addEventListener("click", novaTarefa)

for(i=0; i < tarefas.length; i++){
    let res = document.getElementById("res")

    let resposta = document.createElement("div")
    resposta.innerHTML += `<strong>${tarefas[i].nome}:</strong> ${tarefas[i].fazer}`
    resposta.setAttribute("class","res")
    resposta.setAttribute("id",length++)
    res.appendChild(resposta) 

    let concluir = document.createElement("input")
    concluir.setAttribute("type","button")
    concluir.setAttribute("value","concluir")

    resposta.appendChild(concluir)
    concluir.setAttribute("class","botaoPadrao")
    concluir.addEventListener("click", terminar=function(){

        if(concluir.value === "concluir"){
            concluir.value = "Refazer"
            resposta.setAttribute("class", "botaoConcluir")
        }else{
            resposta.setAttribute("class", "res")
            concluir.value = "concluir"
        }

        //O código acima esta funcionando bem mas eu não sei como salvar as alterações do css no localStorage, se recarregar a pagina some tudo




        /* tarefas.pop()
        localStorage.setItem("tarefas",JSON.stringify(tarefas))
        location.reload() */

        //Eu tentei de todos os jeitos, retirar um elemento especifico da lista mas não consegui, ele sempre tira o ultimo item adicionado 

    })
}

limpar = function(){
    localStorage.clear()
    location.reload()
}
let limparBotao = document.getElementById("limpar")
limparBotao.addEventListener("click", limpar)











