// for ( let volta = 1; volta <= 5 ; volta++){
// console.log("volta número: "+ volta);
// }

// let abc = [10,20,30,40]

// for (let a=0; a<= abc.length; a++ ){
//     console.log(abc[a]) 
// }


// let cont = 0;
// while( cont <= 5){
//     console.log(cont);
//     cont++;
// }

// conta = 0;
// do{
//     console.log(conta);
//     conta++
// }while(conta <=5);



// 1 - Vamos que vamos 

let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"]

// function convertirAMayusculas(array){
    
//      for(let i =0; i < array.length; i++){
//         // console.log(array[i]);
//         array[i] = array[i].toUpperCase()
        
//      }
//      return array;
//     }

//    console.log(convertirAMayusculas(peliculas));

//    2 - 

let peliculas1 = [];
   function pasajeDeElementos(array1, array2) {
      let qtd = array2.length;
    for( let i=0; i < qtd; i++) {
        array1.push(array2.pop().  toUpperCase()) 
    }
    return array1
   }

console.log(pasajeDeElementos(peliculas1,peliculas))

// 3 - 
let filmes = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];
let filmes2 = ["toy story", "finding nemo", "kung-fu panda", "wally", "fortnite"];

function passagem3(arre3,arre4){
   let invalido = arre4.pop();
   let quantidade = arre3.length;

}
