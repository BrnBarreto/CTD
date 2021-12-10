// Micro desafio - Passo 3

// Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), 
// nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos 
//criados no passo 1).

// Micro desafio - Passo 4

//Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em 
//nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.

let aluno = require('./alunos');

const curso = {
    nomeCurso: 'CTD',
    notaAprovacao: 7,
    faltasMaximas: 5, 
    listaEstudantes: aluno.aluno,
    addAluno: function (nome, faltas, notas){
        this.listaEstudantes.push(new aluno.alunos.Cadastro(nome, faltas, notas));
    },

// Micro desafio - Passo 5

// 	Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso 
//     ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de 
//     aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota 
//     de aprovação.

    aprovado: function (estudante){
        let media = aluno.alunos.calcularMedia(estudante.nome);
        let faltas = estudante.qtdFalta;
        if (media >= this.notaAprovacao){
           if (faltas < this.faltasMaximas) {
               return true;
           } else if (faltas == this.faltasMaximas && (media > (this.notaAprovacao * 1.1))){
               return true;
           } else {
               return false;
           }
        } else {
            return false;
        }
    },
// Micro desafio - Passo 6

// 	Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os 
//     resultados se os alunos aprovaram ou não.
    aprovados: function(){
        let alunosAprovados = [];
        this.listaEstudantes.forEach(e => {
            alunosAprovados.push(this.aprovado(e));
        });
        return alunosAprovados;
    },
}

// Micro desafio - Passo 4
// curso.addAluno('Carlos Oliveira', 5, [8,8,7.25]);
// curso.addAluno('Manuel', 8, [8,7,7.25]);

// console.log(curso.listaEstudantes);

// Micro desafio - Passo 5
// console.log(curso.aprovado(curso.listaEstudantes[5]));

// Micro desafio - Passo 6
// console.log(curso.aprovados());

// Micro desafio - Passo 7

// 	Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo que contém o objeto curso. 
//     Substitua o conteúdo da propriedade lista de estudantes, pela lista de estudantes do arquivo estudantes.js e 
//     garanta que sigam funcionando todos os métodos corretamente. (revisar que o arquivo tenha todos os métodos 
//         corretamente).
let novaListaEstudantes = require('./estudantes');

console.log(curso.listaEstudantes);

curso.listaEstudantes.splice(0, curso.listaEstudantes.length);
novaListaEstudantes.forEach(e => {
    curso.addAluno(e.nome, e.qtdFalta, e.notas);
});

console.log(curso.listaEstudantes);

console.log(curso.aprovado(curso.listaEstudantes[3]));

console.log(curso.aprovados());