const itensdaLista = [];

/* função criada para adicionar itens na lista */
function adicionarTarefa() {
  let campoInput = document.getElementById("novaTarefa");

  let tarefa = {
    descricao: campoInput.value,
    riscado: false,
  };

  itensdaLista.push(tarefa);

  /* chamando a função exibitListaTarefas */
  exibirListaTarefas();
  /* Limpar campo Input */
  campoInput.value = "";
}

function limparLista() {
  // removendo todos os nós filhos do elemento ul
  while (listadeTarefas.hasChildNodes()) {
    listadeTarefas.removeChild(listadeTarefas.firstChild);
  }
}

/* função criada para exibir os itens da lista */
function exibirListaTarefas() {
  limparLista();

  for (let posicao = 0; posicao < itensdaLista.length; posicao++) {
    let listadeTarefas = document.getElementById("listadeTarefas");
    let tarefa = document.createElement("li");

    let campoCheckbox = document.createElement("input");
    campoCheckbox.type = "checkbox";

    let campoLabel = document.createElement("label");
    campoLabel.appendChild(
      document.createTextNode(itensdaLista[posicao].descricao)
    );

    let botaoExcluir = document.createElement("button");
    botaoExcluir.classList.add("delete");
    botaoExcluir.innerHTML = '<i class="fas fa-trash-alt"></i>';

    tarefa.appendChild(campoLabel);
    listadeTarefas.appendChild(tarefa);
    listadeTarefas.appendChild(campoCheckbox);
    listadeTarefas.appendChild(campoLabel);
    listadeTarefas.appendChild(botaoExcluir);

    // Adicionando e removendo o estilo das tarefa
    if (itensdaLista[posicao].riscado === true) {
      campoLabel.classList.add("checked");
    }

    campoLabel.addEventListener("click", function () {
      // Compara o valor da variável com false e armazena o resultado em riscado
      itensdaLista[posicao].riscado = itensdaLista[posicao].riscado == false;


      // if(!itensdaLista[posicao].riscado){
      //     itensdaLista[posicao].riscado = true;
      // }else{
      //     itensdaLista[posicao].riscado = false;
      // }

      exibirListaTarefas();
    });

    // Excluindo tarefas
    botaoExcluir.addEventListener("click", function () {
      let tarefaAtual = itensdaLista[posicao];

      for (let i = 0; i < itensdaLista.length; i++) {
        if (itensdaLista[i] === tarefaAtual) {
          itensdaLista.splice(i, 1);
        }
      }

      exibirListaTarefas();
    });
  }
}
