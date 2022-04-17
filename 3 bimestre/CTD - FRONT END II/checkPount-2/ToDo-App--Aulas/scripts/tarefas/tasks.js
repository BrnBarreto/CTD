

let nomeUsuario = document.querySelector(".user-info");

function funcLoad() {
  let jwtValue = localStorage.getItem("jwtKey");
  console.log(jwtValue);

  if (jwtValue != "") {
    let endPointGetUser = "https://ctd-todo-api.herokuapp.com/v1/users/getMe";

    let configRequisicaoGetUser = {
      headers: {
        authorization: jwtValue,
      },
    };

    fetch(endPointGetUser, configRequisicaoGetUser)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        console.log(result);
        localStorage.setItem("nomeUser", result.firstName);
        localStorage.setItem("sobrenomeUser", result.lastName);
        console.log("nomes capturados com sucesso");
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
  }

  // consulta Tarefa do Usuário
  let onomeUser = localStorage.getItem("nomeUser");
  let osobrenomeUser = localStorage.getItem("sobrenomeUser");

  nomeUsuario.innerHTML = `${onomeUser} ${osobrenomeUser}`;

  let endPointTarefaConsulta = "https://ctd-todo-api.herokuapp.com/v1/tasks";

  let configuraRequisicaoConsulta = {
    headers: {
      authorization: jwtValue,
    },
  };

  fetch(endPointTarefaConsulta, configuraRequisicaoConsulta)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      trataTarefasUsuario(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

//tratamento de tarefas do usuário
function trataTarefasUsuario(ListaTarefas) {
  for (let tarefa of ListaTarefas) {
    if (tarefa.completed) {
      renderizaTarefasConcluidas(tarefa);
    } else {
      renderizaTarefasPendentes(tarefa);
    }
  }
}


let tarefasPendentesUl = document.querySelector(".tarefas-pendentes");

function renderizaTarefasPendentes(tarefa) {
  let liTarefaPendente = document.createElement("li");
  liTarefaPendente.classList.add("tarefa");

  liTarefaPendente.innerHTML = `
  <div onclick="mudaUl(${tarefa.id},${true})" class="not-done" id="${tarefa.id}"></div>
    <div class="descricao">
        <p class="nome">${tarefa.description}</p>
        <p class="timestamp"><i class="far fa-calendar-alt"></i> ${tarefa.createdAt}</p>
    </div>`;

  tarefasPendentesUl.appendChild(liTarefaPendente);
}

let tarefasConcluidasUl = document.querySelector(".tarefas-terminadas");

function renderizaTarefasConcluidas(tarefa) {
  let liTarefaConcluida = document.createElement("li");
  liTarefaConcluida.classList.add("tarefa");

  liTarefaConcluida.innerHTML = `
    <div class="done" id="${tarefa.id}"></div>
      <div class="descricao">
          <p class="nome">${tarefa.description}</p>
          <p class="timestamp"><i class="far fa-calendar-alt"></i> ${tarefa.createdAt}</p>
          <div>
          <button onclick="mudaUl(${tarefa.id})"><i id="${tarefa.id}" class="fas fa-undo-alt change"></i></button>
          <button onclick="deletaTarefa(${tarefa.id})"><i id="${tarefa.id}" class="far fa-trash-alt"></i></button>
      </div>
      </div>`;

  tarefasConcluidasUl.appendChild(liTarefaConcluida);
}

function mudaUl(id, boolean) {
  let usuarioTarefa = {
    completed: boolean ?? false,
  };

  let jwtValue3 = localStorage.getItem("jwtKey");

  let tarefaUsuarioJson = JSON.stringify(usuarioTarefa);

  let endPointCadastroTarefas = `https://ctd-todo-api.herokuapp.com/v1/tasks/${id}`;

  fetch(endPointCadastroTarefas, {
    method: "PUT",
    body: tarefaUsuarioJson,
    headers: {
      "Content-Type": "application/json",
      Authorization: jwtValue3,
    }
  })
    .then((resultado) => {
      return resultado.json();
    })
    .then((resultado) => {
      location.reload();
    })
    .catch((erro) => {
      console.log("erro " + erro);
    });
}

function deletaTarefa(id) {
  let endPointCadastroTarefas = `https://ctd-todo-api.herokuapp.com/v1/tasks/${id}`;

  let jwtValue4 = localStorage.getItem("jwtKey");

  fetch(endPointCadastroTarefas, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: jwtValue4,
    },
  })
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
}

let nomeTarefa = document.getElementById("novaTarefa");
let botaoEnviar = document.getElementById("pesquisar");

function criarNovaTarefa() {
  let endpointNovaTarefa = "https://ctd-todo-api.herokuapp.com/v1/tasks";

  let jwtValue2 = localStorage.getItem("jwtKey");

  const cadastroObjetoTarefa = {
    description: "",
    completed: false,
  };

  let campoDescricao;

  campoDescricao = nomeTarefa.value;

  cadastroObjetoTarefa.description = campoDescricao;

  cadastroTarefaJson = JSON.stringify(cadastroObjetoTarefa);

  let novaTarefaRequisicao = {
    method: "POST",
    body: cadastroTarefaJson,
    headers: {
      "content-type": "application/json",
      authorization: jwtValue2,
    },
  };

  fetch(endpointNovaTarefa, novaTarefaRequisicao)
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      console.log(result);
      location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
    
}

botaoEnviar.addEventListener("click", (event) => {
  event.preventDefault();
  criarNovaTarefa();
  
});
