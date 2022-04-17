let newName = document.getElementById("newName");
let newLastName = document.getElementById("newLastName");
let newEmail = document.getElementById("newEmail");
let newPassword = document.getElementById("newPassword");
let confirmationPassword = document.getElementById("confirmationPassword");

let botaoCadastrar = document.getElementById("sendToApi");

let campoNomeCadastroNormalizado;
let campoSobrenomeCadastroNormalizado;
let campoEmailCadastroNormalizado;
let campoSenhaCadastroNormalizado;
let campoConfirmacaoSenhaCadastroNormalizado;

const cadastroObjeto = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function validaDadosCadastro() {
  campoNomeCadastroNormalizado = newName.value;
  campoSobrenomeCadastroNormalizado = newLastName.value;
  campoEmailCadastroNormalizado = retiraEspacosDeUmValor(newEmail.value);
  campoEmailCadastroNormalizado = converteValorRecebidoParaMinusculo(campoEmailCadastroNormalizado);
  campoSenhaCadastroNormalizado = retiraEspacosDeUmValor(newPassword.value);
  campoConfirmacaoSenhaCadastroNormalizado = retiraEspacosDeUmValor(confirmationPassword.value);

  cadastroObjeto.firstName = campoNomeCadastroNormalizado;
  cadastroObjeto.lastName = campoSobrenomeCadastroNormalizado;
  cadastroObjeto.email = campoEmailCadastroNormalizado;
  cadastroObjeto.password = campoSenhaCadastroNormalizado;

  let endPointCadastro = `https://ctd-todo-api.herokuapp.com/v1/users`;

  let cadastroUsuarioJson = JSON.stringify(cadastroObjeto);

  let configRequisicaoCadastro = {
    method: "POST",
    body: cadastroUsuarioJson,
    headers: {
      "content-type": "application/json",
    },
  };

  if (
    campoNomeCadastroNormalizado != "" &&
    campoSobrenomeCadastroNormalizado != "" &&
    campoEmailCadastroNormalizado != "" &&
    campoSenhaCadastroNormalizado != "" &&
    campoConfirmacaoSenhaCadastroNormalizado != "" &&
    campoSenhaCadastroNormalizado == campoConfirmacaoSenhaCadastroNormalizado
  ) {
    fetch(endPointCadastro, configRequisicaoCadastro)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        cadastroSucesso(result);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    alert("Preencha todos os dados de maneira correta!");
  }
}

function cadastroSucesso(jsonRecebido) {
  console.log("Json recebido com Sucesso!");
  console.log(jsonRecebido);
  alert("Usuário cadastrado com sucesso!");

  window.location.href = "index.html";
}

botaoCadastrar.addEventListener("click", (event) => {
  event.preventDefault();
  validaDadosCadastro();
});
