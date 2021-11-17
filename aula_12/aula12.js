const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanhador (a, b) {
    let pontosPrimeiroParticipante = 0;
    let pontosSegundoParticipante = 0;

    for (let i = 0; i <  3; i++) {
        
                if (alicia[i] > bob[i]){
                    pontosPrimeiroParticipante++
                } 
                else if(bob[i]>alicia[i]){
                    pontosSegundoParticipante++
                }
                else if(alicia[i]==bob[i] && i == 0){
                    pontosPrimeiroParticipante++
                }
                else if(alicia[i]==bob[i] && i == 2){
                    pontosSegundoParticipante++
                }

        }

        return  "Alicia = " + pontosPrimeiroParticipante + " e " + "Bob = " + pontosSegundoParticipante;
        
    
}

console.log("O ganhador é: " + encontrarGanhador (alicia, bob));
