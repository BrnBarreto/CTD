function podeSubir(alturaPessoa, estaAcompanhada){


    if ( alturaPessoa >= 1.40 && alturaPessoa <= 2.00 ) {
        return true //"Acesso autorizado"

     }
     else if(alturaPessoa < 1.4 && alturaPessoa > 1.2 && estaAcompanhada  == true ){
         
        return true //"Acesso autorizado somente com acompanhante"

     }else{
         return false  //"Acesso negado"
     }

}
console.log(podeSubir(1.4,false))
