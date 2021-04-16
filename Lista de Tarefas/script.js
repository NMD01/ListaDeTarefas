
let tarefas = []


if (localStorage.hasOwnProperty("tarefas")) {
    tarefas = JSON.parse(localStorage.getItem("tarefas"))
  }

  
console.log(tarefas)





  





novaTarefa = function(){

    let tarefa1 = document.getElementById("tarefa")
    let nome1 = document.getElementById("nome")

    tarefas.push({nome:nome1.value, fazer:tarefa1.value})
   


    localStorage.setItem("tarefas", JSON.stringify(tarefas)) 
        console.log(tarefas)
  
}


let adicionar = document.getElementById("adicionar")
adicionar.addEventListener("click", novaTarefa)

for(i=0; i < tarefas.length; i++){
    let res = document.getElementById("res")

    
    let resposta = document.createElement("div")
    resposta.innerHTML += `<strong>${tarefas[i].nome}:</strong> ${tarefas[i].fazer}`
    resposta.setAttribute("class","res")
    res.appendChild(resposta) 


    

}












