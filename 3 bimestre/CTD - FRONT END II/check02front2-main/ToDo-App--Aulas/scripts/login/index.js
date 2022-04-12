let campoEmailLogin = document.getElementById("inputEmail");
let campoSenhaLogin = document.getElementById("inputPassword");
let botaoAcessar = document.getElementById("botaoAcessar");

let campoEmailLoginNormalizado;
let campoSenhaLoginNormalizado;

let emailEValido = false;

const usuarioObjeto = {
  email: "",
  password: "",
};

function validacaoTelaDeLogin() {
  if (emailEValido) {
    botaoAcessar.removeAttribute("disabled");
    botaoAcessar.innerText = "Acessar";
    return true;
  } else {
    botaoAcessar.setAttribute("disabled", true);
    botaoAcessar.innerText = "Bloqueado";
    return false;
  }
}

function validateEmail(campoEmailLoginNormalizado) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  campoEmailLoginNormalizado = retiraEspacosDeUmValor(campoEmailLogin.value);
  campoEmailLoginNormalizado = converteValorRecebidoParaMinusculo(campoEmailLoginNormalizado);
  campoSenhaLoginNormalizado = retiraEspacosDeUmValor(campoSenhaLogin.value);

  usuarioObjeto.email = campoEmailLoginNormalizado;

  if (
    campoEmailLoginNormalizado.match(regexEmail) &&
    campoSenhaLoginNormalizado != ""
  ) {
    botaoAcessar.removeAttribute("disabled");
    botaoAcessar.innerText = "Acessar";

    return true;
  } else {
    botaoAcessar.setAttribute("disabled", true);
    botaoAcessar.innerText = "Bloqueado";
    return false;
  }
}
campoEmailLogin.addEventListener("blur", function () {
  let inputEmailValidacao = document.getElementById("inputEmailValidacao");

  if (campoEmailLogin.value != "") {
    inputEmailValidacao.innerText = "";
    campoEmailLogin.style.border = ``;
    emailEValido = true;
  } else {
    inputEmailValidacao.innerText = "Campo obrigatório";
    inputEmailValidacao.style.color = "red";
    inputEmailValidacao.style.fontSize = "8pt";
    inputEmailValidacao.style.fontWeight = "bold";
    campoEmailLogin.style.border = `1px solid #EE1729EC`;
    emailEValido = false;
  }
  validacaoTelaDeLogin();
  validateEmail();
});

campoSenhaLogin.addEventListener("blur", function () {
  let inputSenhaValidacao = document.getElementById("inputSenhaValidacao");

  if (campoSenhaLogin.value != "") {
    inputSenhaValidacao.innerText = "";
    campoSenhaLogin.style.border = ``;
    emailEValido = true;
  } else {
    inputSenhaValidacao.innerText = "Campo obrigatório";
    inputSenhaValidacao.style.color = "red";
    inputSenhaValidacao.style.fontSize = "8pt";
    inputSenhaValidacao.style.fontWeight = "bold";
    campoSenhaLogin.style.border = `1px solid #EE1729EC`;
    emailEValido = false;
  }
  validacaoTelaDeLogin();
  validateEmail();
});


function validaLogin() {
  let endPointLogin = "https://ctd-todo-api.herokuapp.com/v1/users/login";
  let objetoJson = JSON.stringify(usuarioObjeto);

  let configuraRequisicao = {
    method: 'POST',

    body: objetoJson,

    headers: {
      "content-type": "application/json"
    }
  };

  fetch(endPointLogin, configuraRequisicao).then(
    result => {
        return result.json();
    }
).then(
    result => {
        console.log(result);
        localStorage.setItem("jwtKey",`${JSON.stringify(result)}`);
    }
).catch(
    err => {
        console.log(err);
    }
);
}

botaoAcessar.addEventListener("click", function (evento) {
  if (validacaoTelaDeLogin()) {
    evento.preventDefault();
    campoEmailLoginNormalizado = retiraEspacosDeUmValor(campoEmailLogin.value);
    campoSenhaLoginNormalizado = retiraEspacosDeUmValor(campoSenhaLogin.value);
    campoEmailLoginNormalizado = converteValorRecebidoParaMinusculo(
      campoEmailLoginNormalizado
    );

    usuarioObjeto.email = campoEmailLoginNormalizado;
    usuarioObjeto.password = campoSenhaLoginNormalizado;

    console.log(usuarioObjeto);
    validaLogin();
  } else {
    alert("Ambos os campos devem ser informados");
    evento.preventDefault();
  }
});
