const itensdaLista = [];

function limparLista(){
    // removendo todos os nós filhos do elemento ul
    while(listadeTarefas.hasChildNodes()){
        listadeTarefas.removeChild(listadeTarefas.firstChild);
    }
}

/* função criada para exibir os itens da lista */
function exibirListaTarefas() {

    limparLista();
    console.log(listadeTarefas);

    for (let posicao = 0; posicao < itensdaLista.length; posicao++) {

        let listadeTarefas = document.getElementById('listadeTarefas');
        let tarefa = document.createElement('li');
        
        let campoCheckbox = document.createElement('input');
        campoCheckbox.type = "checkbox";
        let campoLabel = document.createElement('label');
        campoLabel.appendChild(document.createTextNode(itensdaLista[posicao]));
        tarefa.appendChild(campoLabel);
        listadeTarefas.appendChild(tarefa);
        listadeTarefas.appendChild(campoCheckbox);
        listadeTarefas.appendChild(campoLabel);
        
    }
    console.log(itensdaLista);
}

/* função criada para adicionar itens na lista */
function adicionarTarefa() {
    itensdaLista.push(document.getElementById("novaTarefa").value);

    /* chamando a função exibitListaTarefas */
    exibirListaTarefas();

}




