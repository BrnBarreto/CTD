// let bemVindo = () =>"olá Mundo";

// let dobro = numero => numero *2;

// let soma = (a,b) => a+b;

// let horaAtual= () => {
//     let data = new Date();
//     return data.getHours() + ":"+ data.getMinutes();
// }

// console.log(soma(1,2));
// console.log(horaAtual());
// console.log(dobro(3));
// console.log(bemVindo());

// callback --- 
// setTimeout( function(){
//     console.log("Ola Mundo")
   
// },1000);

// setInterval(function (){
//     console.log("Opa")
// }, 1000)

// let print = () =>{
//     console.log("Ola Mundo");
// }
// setInterval(print,);;


// function nomeCompleto(nome, sobrenome) {
//     return nome+' '+sobrenome
// }

// console.log( nomeCompleto("Marcos", "Santana") );

// function bomDia(nome, sobrenome, callback) {
//     return 'Olá '+callback(nome, sobrenome)
// }

// // console.log( bomDia("Johnny", "Pecego", nomeCompleto) )A função deve atender aos seguintes requisitos:

// ⦁	Você deve imprimir os números de 1 a 100;
// ⦁	Se o número a ser impresso for um múltiplo de seu PRIMEIRO parâmetro, você deve imprimir a palavra “Fizz” em vez do número correspondente;
// ⦁	Se o número a ser impresso for um múltiplo do seu SEGUNDO parâmetro, você deve imprimir a palavra "Buzz" em vez do número correspondente;
// ⦁	Se o número for um múltiplo de AMBOS os parâmetros, você deve imprimir a palavra “FizzBuzz”.
// Avançado: Como crédito extra, pense em como otimizar seu programa para que as palavras sejam passadas de forma dinâmica e seja você quem decide quais palavras ele deve dizer.



let fizzBuss = (para1,para2) => {

for ( let i = 0; 1<= 100; i++) {

        if ( i % para1 == 0 && i % para2 == 0 ) {

            return "FizzBuzz" 

        } else if (i % para1 == 0 ){

            return "Fizz"

        } else if (i % para2 == 0 ) {

            return "Buzz" 

        } else {   

            return i ;

        }  

    } 
}

consle.log(fizzBuss(3,3))
























