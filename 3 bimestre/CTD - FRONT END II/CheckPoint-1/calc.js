

// Criando Formulário
//    let criarDiv = document.createElement("div")
//    document.body.appendChild(criarDiv);
//    let criarForm = document.createElement("form");
//    criarDiv.appendChild(criarForm);
// criando um botão
//    let abs = document.createElement("button")
//    let abb = document.createTextNode("Ver mais")
//    abs.appendChild(abb)
//    document.body.appendChild(abs)

// function criaCard(){
//    let linkimagem = document.querySelector(".abc").value;
//    let addtitle = document.querySelector("#titulo").value;
//    let addDesc = document.querySelector("#descricao").value;



// let base = 
//    `<div class="card">

//    <img  id="imagem" src="${linkimagem}" alt="">

//    <h2 class="title"> Naruto Criança </h2>
//    <br>
//    <p id="paragrafo">Dolore quidem iste </p>

// </div>  `;

// let capturaCardpai = document.querySelector(".cardPai");
// let criarDiv = document.createElement("div")
// criarDiv.innerHTML = base;
// capturaCardpai.appendChild(criarDiv)






   
   function addImg () {

      let linkimagem = document.querySelector(".abc").value;
      let img = document.querySelector("#imagem"); 
      img.setAttribute("src",linkimagem) 

      // let addtitle = document.querySelector("#titulo").value;
      // let title  = document.querySelector(".title"); 
      // title.innerHTML = addtitle;

      // let addDesc = document.querySelector("#descricao").value;
      // let desc  = document.querySelector("p");
      //  desc.innerHTML = addDesc;
      
      let base = 
      `<div class="card">
   
      <img  id="imagem" src="${linkimagem}" alt="">
   
      <h2 class="title"> Naruto Criança </h2>
      <br>
      <p id="paragrafo">Dolore quidem iste </p>
   
   </div>  `;
   
   let capturaCardpai = document.querySelector(".cardPai");
   let criarDiv = document.createElement("div")
   criarDiv.innerHTML = base;
   capturaCardpai.appendChild(criarDiv)
   
   }

   

   

   
   
  