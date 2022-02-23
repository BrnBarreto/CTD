let jogo = confirm("Vamos Jogar Pedra, papel e tesoura?");

// 0 - para pedra - 1 - para papel - 2 para tesoura;


alert(Math.floor(Math.random() *3 ))

if (jogo){

   let j1 = parseInt(prompt("insira um número 0 para pedra, 1 para tesoura e 2 para papel."))
   let j2 = Math.floor(Math.random() *3 )
   
   let contaj1 = 0;
   let contaj2 = 0;

const resultado = j1 + j2 

     switch (resultado){ 
         
        case '00':
        case '11':
        case '22':
            alert("Ninguem Ganhou")
        break

        case '02':
        case '10':
        case '21':
        alert("Você Ganhou!")
        break

        case '01':
        case '12':
        case '20':
        alert("Você Perdeu!")
        break


        default:
            alert( "O numero tem que ser 0, 1 ou 2 ")
     }


   }
