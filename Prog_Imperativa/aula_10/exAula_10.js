
// 1 - 
// let numbers = [22, 33, 54, 66, 72]
// console.log(numbers[numbers.length])
// retornou Nulo por que o método length esta contando o tamanho da arrau "numbers", e o resultado é usado para identificar a posição dentro do array, como o contador começa em zaro, por conseqência não terá uma posição do o numero obtido


// 2 - 
// let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], [[1,2,3,4,5], "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
// console.log(grupoDeAmigos[1][0][1])
//  Buscaou um dado, dentro de uma array que estava em outro Array, com isso a sintaxe ficou assim:  nomeDoArray[  posição primaria ] [ posição secundária ]


// 3 - 
// let str = "uma string qualquer";
// let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ];

// console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])
//  Escrevemos um caminho dentro do local que indica a posição da variavel - 
// Sempre que tivermos uma array dento de outra o acesso sempre será [] [] [] [] ... assim os níveis vão descendo até chegar no ultimo array dentro do array


// Array Invertido

// 1 - 
// function imprimirInverso(array){

//     for (let i = array.length -1 ; i >= 0 ; i--) {
//          console.log(array[i])
        
//     }

// }
// imprimirInverso([1,2,3,4,5,])

// 2 - 
let a = [1,2,3,4,5,6];
console.log(a);

function arrayInvertido(aray1) {
    let meuArrayInvetido =[]
     return meuArrayInvetido = aray1.reverse();
    
}
arrayInvertido(a);
