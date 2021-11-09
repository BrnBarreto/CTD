// 1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

let comida = {
    pipoca: 10,
    macarrão: 8,
    carne: 15,
    feijão: 12,
    brigadeiro: 8
}

function microondas(comida, tempo){
    if (tempo < comida){
        console.log("Tempo Insuficiente!")
    }else if(tempo >= comida && tempo < 2 * comida){
        console.log("Prato pronto, bom apetite!!!")
    }else if(tempo >= 2 * comida && tempo < 3 * comida){
        console.log("Prato Queimou")
    }else if(tempo >= 3 * comida){
        console.log("kabumm")
    }else{
        console.log("Prato inexistente")
    }
}

microondas(comida.pipoca, 10);
microondas(comida.feijão, 13);
microondas(comida.carne, 42);
microondas(comida.macarrão, 50);
microondas(comida.pipoca, 21)




// function micro(comida,tempo){

//     if( comida == "Pipoca" || comida == "Macarrão" || comida == "Carne" || comida == "Feijão" || comida == "Brigadeiro"){

//     if (comida == "Pipoca" && tempo >= 3*10 ){
    
//         console.log("Kabumm.")
//     }
//     else if(comida == "pipoca" && tempo < 10 ){
//         console.log("Tempo insuficiente")
//     }
//     else if(comida == "pipoca" && tempo >= 2 *10 ){
//         console.log("A comida queimou")
//     }else{
//         console.log("Prato Pronto, bom apetite!!!")
//     }
// // ----------------------------------------------


//     if (comida == "Macarrão" && tempo >= 3*8 ){
    
//         console.log("Kabumm.")
//     }
//     else if(comida == "Macarão" && tempo < 8 ){
//         console.log("Tempo insuficiente")
//     }
//     else if(comida == "Macarrão" && tempo >= 2*8 ){
//         console.log("A comida queimou")
//     }else{
//         console.log("Prato Pronto, bom apetite!!!")
//     }

// // --------------------------------------------

// if (comida == "Carne" && tempo >= 3*15 ){
    
//     console.log("Kabumm.")
// }
// else if(comida == "Carne" && tempo < 15 ){
//     console.log("Tempo insuficiente")
// }
// else if(comida == "Carne" && tempo >= 2*15 ){
//     console.log("A comida queimou")
// }else{
//     console.log("Prato Pronto, bom apetite!!!")
// }

// //-------------------------------------------------

// if (comida == "Feijão" && tempo >= 3*12 ){
    
//     console.log("Kabumm.")
// }
// else if(comida == "Feijão" && tempo < 12 ){

//     console.log("Tempo insuficiente")
// }
// else if(comida == "pipoca" && tempo >= 2*12 ){
//     console.log("A comida queimou")
// }else{
//     console.log("Prato Pronto, bom apetite!!!")
// }
// // --------------------------------
// if (comida == "Brigadeiro" && tempo >= 3*8 ){
    
//     console.log("Kabumm.")
// }
// else if(comida == "Brigadeiro" && tempo < 8 ){
//     console.log("Tempo insuficiente")
// }
// else if(comida == "Brigadeiro" && tempo >= 2*8 ){
//     console.log("A comida queimou")
// }else{
//     console.log("Prato Pronto, bom apetite!!!")
// }

// }

// }
    




// console.log(micro("Feijão",12))

