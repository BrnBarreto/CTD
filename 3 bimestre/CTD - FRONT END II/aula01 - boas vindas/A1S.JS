// Desenvolver um script que permita somar um array de números consecutivos, de forma que se some o primeiro número com o segundo e o imprima através do console. 
// Depois, temos que pegar este resultado e somar o terceiro número, e assim por diante, até termos terminado de percorrer todo o array.


let arraya =[1,3,5,7,9,10];

let soma = 0;


for (let i = 0; i < arraya.length ; i++) {
    
    soma += arraya[i]
    
}
console.log(soma)
