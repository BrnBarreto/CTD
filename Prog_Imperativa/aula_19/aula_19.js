// array objetos  - Pessoas - atributos - Altura e Sexo;
// 
// usar o sorte para o maior e menor
//  usar a future redude e o map 

let jason = require('./jason')
let popularArray = []

function Pessoas (nome, sexo, altura) {
    this.nome = nome, 
    this.sexo = sexo,
    this.altura =altura
}

for (let i = 0; i < jason.length; i++){
    popularArray.push(new Pessoas(
        jason[i].nome, 
        jason[i].sexo,
        jason[i].altura
    ))
}


// console.log(popularArray);


// a maior e a menor altura do grupo;
// a média de altura das mulheres;
// o número de homens.

let alturas = []

for (let i = 0; i < jason.length; i++){

   alturas.push(popularArray[i].altura)

}

console.log(Math.max(...alturas));
console.log(Math.min(...alturas));

let soma = 0
let mulheres = 0
let homens = 0

for (let i = 0; i < jason.length; i++){
    if (jason[i].sexo == 'F'){
        soma += jason[i].altura 
        mulheres++
    }else {homens++}
}

console.log("A média das mulheres é:" + soma / mulheres); 
console.log("Quantidade de Homens:" + homens);
console.log("A altura Max é: "+ (Math.max(...alturas)+ "A minima é: " + (Math.min(...alturas) )))
