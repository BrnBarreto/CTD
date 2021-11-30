/*
SEGUINDO A MESA DE TRABALHO DA AULA 13. DESENVOLVA ESSE ALGORITMO 
1 - CRIE UMA FUNÇÃO CONSTRUTORA PARA O OBJETO CONTA BANCARIA COM AS SEGUINTES PROPRIEDADES:

● Número da conta (somente números)
● Tipo de conta (conta corrente ou poupança em $)
● Saldo em $ (valor apenas)
● Titular da conta (nome completo)

2 - MOLDE AS INFORMAÇÕES DO ARQUIVO https://drive.google.com/file/d/16L2NejZU49mCLbo6RTmSKtuElOTOYUXv/view
PARA O FORMATO JSON, E EXPORTE ESSE JSON COMO MODULO

3 - DESENVOLVA UM ALGORITOMO QUE IRA RECEBER O MODULO ARRAY DE JSON E CRIE DINAMICAMENTE OS 
OBJETOS CONTA BANCARIA EM UM SEGUNDO ARRAY LISTA USUARIOS ARMAZENE ESSE OBJETOS 

4 - CRIE DE UM OBJETO LITERAL CHAMADO BANCO QUE TERÁ UMA PROPRIEDADE CHAMADA CLIENTES, ELE SERÁ COMPOSTO 
PELA LISTA DE OBJETOS GERADOS NO PONTO ANTERIOR.

5 - O OBJETO DO BANCO CRIARÁ UM MÉTODO CHAMADO CONSULTARCLIENTE QUE RECEBERÁ UM
NOME (TITULAR) POR PARÂMETRO E DEVE PESQUISAR NA LISTA DE CONTAS E RETORNAR AO
OBJETO DO CLIENTE QUE CORRESPONDE A ESSE NOME INSERIDO.


*/
let arrayPessoas = require('./pasta/test')

function ContaBancaria ( numero, tipo, saldo, titular){

    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;

}
//3. Criação dinamica de array de objetos
let arrayObjPessoas = []

for (let i = 0; i < arrayPessoas.length; i++) {
    arrayObjPessoas.push(new ContaBancaria(
        arrayPessoas[i].numero, arrayPessoas[i].tipo, arrayPessoas[i].saldo, arrayPessoas[i].titular));

}

// console.log(arrayObjPessoas[1])

//4. Objeto banco  5. Consulta cliente 

banco = {
    pessoas: arrayObjPessoas,

    consultarCliente: function(nomeCliente){
        for (let i = 0; i < arrayPessoas.length; i++) {
            if (arrayPessoas[i].titular == nomeCliente) {
                return arrayPessoas[i]
            }else{
                null
            }
            return 'Pessoa não encontrada'
        }
    }

}

console.log(banco.pessoas)
// console.log(banco.consultarCliente("Jarret Lafuente"))





