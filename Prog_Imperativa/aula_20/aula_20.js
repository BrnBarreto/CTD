// Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.
// Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
// a média das idades das pessoas que responderam ótimo;
// a quantidade de pessoas que responderam regular;
// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

let espectadores = [];

function Espectador(idade,opiniao){
    this.idade = idade;
    this.opiniao = opiniao;
}

espectadores.push(new Espectador(17,'ótimo'));
espectadores.push(new Espectador(13,'bom'));
espectadores.push(new Espectador(15,'regular'));
espectadores.push(new Espectador(18,'ótimo'));
espectadores.push(new Espectador(22,'bom'));
espectadores.push(new Espectador(34,'ótimo'));
espectadores.push(new Espectador(50,'regular'));
espectadores.push(new Espectador(25,'bom'));
espectadores.push(new Espectador(30,'ótimo'));
espectadores.push(new Espectador(14,'regular'));
espectadores.push(new Espectador(21,'ótimo'));
espectadores.push(new Espectador(20,'bom'));
espectadores.push(new Espectador(15,'regular'));
espectadores.push(new Espectador(22,'ótimo'));
espectadores.push(new Espectador(23,'bom'));

// console.log(espectadores);

// a média das idades das pessoas que responderam ótimo;

let soma = 0;
let otimo = 0;
let regular = 0;
let bom = 0;

for (let  i = 0; i < espectadores.length; i ++){

    if ( espectadores[i].opiniao == "ótimo"){
        soma += espectadores[i].idade;
        otimo++
    }else if (espectadores[i].opiniao == "regular"){
        regular++
    }else{
        bom++
    };

};
// console.log(soma/otimo)
// console.log(" Quantidade de pessoas que responderam regular: " + regular);
// console.log(((bom/(bom+otimo+regular)))*100 + "%");

// a quantidade de pessoas que responderam regular;
console.log('A média das idades das pessoas que responderam ótimo '+(soma/ otimo)+', a quantidade de pessoas que responderam regular foi '+
(regular)+' e a porcentagem de pessoas que responderam bom entre todos os espectadores analisados foi de '+(bom/(bom+regular+otimo)*100)+'%.')
