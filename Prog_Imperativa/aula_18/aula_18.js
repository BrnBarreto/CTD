// Loop de Pares
// Você deve criar uma função chamada loopDePares que receba um número como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
// Caso o número da iteração somado com o número passado pelo parâmetro seja par, aparecerá no console: "O número x é par"

// let  loopDePares = (num)=>{
//         for (i =0 ; i <= 100; i++){
//             let soma = num + i;
//             if(soma % 2 == 0){
//                 console.log("O Número; " + soma + " é par")
//             }
//         }
// }
// loopDePares(4);

// Loop ímpares com palavra
// Você deve criar uma função chamada loopDeImpares que receba um número e uma palavra como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
// Agora, modifique o código para que, caso esse número somado com o número passado por parâmetro seja ímpar, mostre a palavra passada por parâmetro no console.
// let  loopDeImpares = (num, palavra)=>{

//     for (i =0 ; i <= 100; i++){
//         let soma = num + i;
//         if(soma % 2 !== 0){
//             console.log("O Número; "  + soma + " é Ímpare a palavra é; "+ palavra)
//         }
//     }
// }
// loopDeImpares(1,"Impar");


// Soma
// 	Você deve criar uma função chamada soma que receba um número como parâmetro e retorne a soma de todos os seus números anteriores, incluindo o número recebido por parâmetro.
// Exemplo: 
// soma(3) deve retornar 6 pois faz (1 +2 +3)
// soma(8) deve retornar 36

// let soma = (num)=>{
//     let resultado = 0;
//     for ( i = 0; i <= num ; i++ ){

//         resultado += i;

//     }
//     return resultado;
// } 
// console.log(soma(8));


// Novo Array
// Você deve criar uma função chamada newArray que receba um número como parâmetro e retorne um novo array com a quantidade de elementos equivalente ao valor do número que você passou por parâmetro.
// Exemplo: 
// newArray(5) deve retornar [1,2,3,4,5]
// newArray(10) deve retornar [1,2,3,4,5,6,7,8,9,10]

// let arrayNovo = [];

// let newArray = (num) => {

//     for ( i = 1; i <= num; i++ ){
//         arrayNovo.push(i);
//     }
//     return arrayNovo
// }
// console.log(newArray(5));


// String.split()
// Você deve criar uma função chamada split que receba uma string e simule o comportamento da função split original. Se você não sabe como funciona, o Google pode ajudá-lo.
// Importante: Você não pode usar o String.split()
// Exemplo: 
// split(“olá”) deve retornar [”o”,”l”,”á”]
// split(“tchau”) deve retornar [“t”,“c”,”h”,”a”,”u”]



// let simulandoSplit = ( y ) => {
     
//     let arraytemp = [];
//      for ( i = 0; i < y.length ; i++){
//          arraytemp.push( y[i])
//      }
//      return arraytemp
// }
// console.log(simulandoSplit("ola sou o Bruno"));


// Mover os zeros para o final
// Você deve criar uma função chamada moverZeros que receba um array como parâmetro e retorne outro com os números 0 ordenados ao final.

// Exemplo: 
// moverZeros([false,1,0,1,2,0,1,3,"a"]) deve retornar [false,1,1,2,1,3,"a",0,0]
// moverZeros([1,2,0,1,0,1,0,3,0,1]) deve retornar [1,2,1,1,3,1,0,0,0,0]


// let moverZeros = (x) => {

//     let recalc = [];
//     let conta = 0;

//         for (let index = 0; index < x.length; index++) {

//             if (x[index] !== 0 ){

//                 recalc.push(x[index])
                
//             } else {

//                 conta++

//             }
            
//         }
//         for (let i = 0; i < conta; i++){
//             recalc.push(0)
//         }
//         return recalc
// }
// console.log(moverZeros([2,3,0,0,0,3,4,5,0]))



