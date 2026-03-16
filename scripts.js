/*
Lista de tarefas
[x] Saber qaundo o botao foi clicado
[x]Pegar o texto dentro do input
[x]Colocar o texto na tela
[x] Deletar a tatefa da tela (Quando eu clicar no X)
*/

function adicionarTarefa() {
    let valorDoInput = document.querySelector('input').value

    let li = document.createElement("li")
    li.innerHTML = valorDoInput + '<span onclick="deletarTarefa(this)">❌</span>'

    document.querySelector("ul").appendChild(li)

    document.querySelector('input').value = ''

}

function deletarTarefa(li) {
    li.parentElement.remove()


}

