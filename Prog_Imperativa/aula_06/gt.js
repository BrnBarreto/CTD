function soma(a, b){
    return a+b;
}

function subtracao(a, b){
    return a-b;
}

function multiplicacao(a, b){
    return a*b;
}

function divisao(a, b){
    return a/b;
}

function quadradoDoNumero(a){
    return multiplicacao(a, a);
}

function mediaDeTresNumeros(a, b, c){
    let result = soma(a, b);
    result = soma(c,result);
    result = divisao(result,3);

    return result;
}

function calculaPorcentagem(a, porcentagem){
    let result = divisao(porcentagem, 100);
    result = multiplicacao(a, result);

    return result;
}

function geradorDePorcentagem(a, b){
    let result = multiplicacao(a, 100);
    result = divisao(result, b);

    return result;
}

console.log ("-------------- Teste de Operações / Calculadora --------------");

console.log(soma(10,10));
console.log(subtracao(10,10));
console.log(multiplicacao(100,10));
console.log(divisao(50,10));
console.log("---------- Divisão por 0 ----------");
console.log(divisao(50,0));
console.log("-------- Fim Divisão por 0 --------");
console.log(quadradoDoNumero(2));
console.log(mediaDeTresNumeros(2,4,8).toFixed(2));
console.log(calculaPorcentagem(300, 15));
console.log(geradorDePorcentagem(2, 200)+"%");