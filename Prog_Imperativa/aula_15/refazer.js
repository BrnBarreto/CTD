
// SEGUINDO A MESA DE TRABALHO DA AULA 13. DESENVOLVA ESSE ALGORITMO 
// 1 - CRIE UMA FUNÇÃO CONSTRUTORA PARA O OBJETO CONTA BANCARIA COM AS SEGUINTES PROPRIEDADES:

// ● Número da conta (somente números)
// ● Tipo de conta (conta corrente ou poupança em $)
// ● Saldo em $ (valor apenas)
// ● Titular da conta (nome completo)

// 2 - MOLDE AS INFORMAÇÕES DO ARQUIVO https://drive.google.com/file/d/16L2NejZU49mCLbo6RTmSKtuElOTOYUXv/view
// PARA O FORMATO JSON, E EXPORTE ESSE JSON COMO MODULO

// 3 - DESENVOLVA UM ALGORITOMO QUE IRA RECEBER O MODULO ARRAY DE JSON E CRIE DINAMICAMENTE OS 
// OBJETOS CONTA BANCARIA EM UM SEGUNDO ARRAY LISTA USUARIOS ARMAZENE ESSE OBJETOS 

// 4 - CRIE DE UM OBJETO LITERAL CHAMADO BANCO QUE TERÁ UMA PROPRIEDADE CHAMADA CLIENTES, ELE SERÁ COMPOSTO 
// PELA LISTA DE OBJETOS GERADOS NO PONTO ANTERIOR.

// 5 - O OBJETO DO BANCO CRIARÁ UM MÉTODO CHAMADO CONSULTARCLIENTE QUE RECEBERÁ UM
// NOME (TITULAR) POR PARÂMETRO E DEVE PESQUISAR NA LISTA DE CONTAS E RETORNAR AO
// OBJETO DO CLIENTE QUE CORRESPONDE A ESSE NOME INSERIDO.

let refazerjason = require('./pasta/refazejson')
let criandoConta = []


// 1 - função construtora
function ContaBancaria (numero, tipo, saldo,titular) {

    this.numero = numero,
    this.tipo = tipo,
    this.saldo = saldo,
    this.titular = titular

}



// 3 - criação dinamica de um array usando jason 



    for(let i = 0; i < refazerjason.length; i++) {

        criandoConta.push(new ContaBancaria
                    (
                    refazerjason[i].numero ,
                    refazerjason[i].tipo ,
                    refazerjason[i].saldo,
                    refazerjason[i].titular
                    )
        );

}

// console.log(criandoConta)


// 4 - criação de objeto literal
 let banco = {
     cliente: criandoConta,

     consultarCliente: function (nome) {

         for ( i = 0 ; i < criandoConta.length ; i++){

             if ( criandoConta[i].titular == nome){
               
            return criandoConta[1]
             }else{
                 return "Não encontrado"
             }
            }
     }
 };
//  console.log(banco.cliente)
console.log(banco.consultarCliente('Abigael Natte'))
                
             
      
     
     