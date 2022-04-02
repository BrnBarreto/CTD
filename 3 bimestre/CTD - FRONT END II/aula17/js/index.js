// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona

let botao = document.getElementById("random");

function aleatorio(){

    fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json();
    })
    .then(data => {
         renderizarDadosUsuario(data)
       
    });
}




    function renderizarDadosUsuario(dados) {
        // let tratamento = dados.results[0].name.title

        let nome = dados.results[0].name.first;
        let sobrenome = dados.results[0].name.last;

        let email = dados.results[0].email;

        let img = dados.results[0].picture.large;

        const printTela = document.getElementById("printNaTela");

          printTela.innerHTML = 
          ` 
            <img src="${img}" class="img">
            <h1 class="textTitle">${nome} ${sobrenome}</h1>
            <p class="textMail">${email}</p>
          `;
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
}
botao.addEventListener('click', ()=>{
    aleatorio()
});


/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.