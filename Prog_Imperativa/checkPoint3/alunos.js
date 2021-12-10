// Micro desafio - Passo 1

// Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 
// Crie um construtor para ele e importe-o como o módulo aluno.
let aluno = [];
let alunos = {

Cadastro: function(nome, qtdFalta, notas) {
    this.nome = nome;
    this.qtdFalta = qtdFalta;
    this.notas = notas
},

// Micro desafio - Passo 2

// Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado 
// faltas, que simplesmente aumenta o número de faltas em 1.

calcularMedia: function (nomeAluno){
  let soma = 0;
  let pessoa = aluno.filter((item) => item.nome == nomeAluno);
  for (let index = 0; index < pessoa[0].notas.length; index++) {
     soma += pessoa[0].notas[index];      
  }
   return soma / pessoa[0].notas.length;
},

faltas: function (nomeAluno){
    let pessoa = aluno.filter((item) => item.nome == nomeAluno);
    pessoa[0].qtdFalta++;
    return pessoa[0].qtdFalta;
},
}

aluno.push(new alunos.Cadastro('Rafael Queiroz',0, [9, 10, 10]));
aluno.push(new alunos.Cadastro('Bruno Barreto',3, [10, 9.75, 10]));
aluno.push(new alunos.Cadastro('Gabi Nakasone',1, [10, 10, 10]));
aluno.push(new alunos.Cadastro('Edimilson Sousa',3, [8, 7, 10]));
aluno.push(new alunos.Cadastro('Vinicius Evandro',1, [8, 8, 7]));
aluno.push(new alunos.Cadastro('Marcelo Barbosa',6, [8, 6, 5]));

//console.log(alunos);

module.exports = {alunos, aluno};