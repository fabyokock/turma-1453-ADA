console.log("------------------------------------------");
console.log("            DESAFIOS DA AULA 02           ");
console.log("       ### Desafio #01 - Mediano ###      ");
console.log("------------------------------------------");

// Crie uma função nomeCompleto que receba um objeto com as propriedades nome e sobrenome, e retorne uma string concatenando os dois.
// ➡️ Resultado esperado: "Maria Oliveira"

function nomeCompleto(nome, sobrenome) {
  let pessoa = {
    Nome: nome,
    Sobrenome: sobrenome,
  };
  return pessoa;
}

console.log(nomeCompleto("Maria", "Oliveira"));

let registro = nomeCompleto("Maria", "Oliveira");
console.log(`O nome registrado foi:`, registro.Nome, registro.Sobrenome);

console.log("");

console.log("------------------------------------------");
console.log("            DESAFIOS DA AULA 02           ");
console.log("       ### Desafio #02 - Difícil ###      ");
console.log("------------------------------------------");

// Crie uma função adicionarPropriedade que receba um objeto, uma chave e um valor, e adicione essa nova propriedade ao objeto.
// ➡️ Após chamar adicionarPropriedade(produto, "cor", "preto"), o objeto deve ficar assim:
// { nome: "Notebook", preco: 2500, cor: "preto" }

function adicionarPropriedade(obj, chave, valor) {
  obj[chave] = valor;
  return obj;
}

let produto = {
  Nome: "Notebook",
  Valor: 2500,
};

let atualizado = adicionarPropriedade(produto, "Cor", "Preto");
console.log(atualizado);

console.log("");

console.log("------------------------------------------");
console.log("            DESAFIOS DA AULA 02           ");
console.log("      ### Desafio #03 - Desafiador ###    ");
console.log("------------------------------------------");

// Crie uma função adicionarAluno que receba um array de alunos (objetos) e um novo aluno, adicionando-o ao final do array com .push().

// let alunos = [
//   { nome: "Ana", idade: 20 },
//   { nome: "Carlos", idade: 22 }
// ];

// let novoAluno = { nome: "Bruno", idade: 25 };

// ➡️ Resultado esperado após chamar a função:
// [
//   { nome: "Ana", idade: 20 },
//   { nome: "Carlos", idade: 22 },
//   { nome: "Bruno", idade: 25 }
// ]

function adicionarAluno(arrayAlunos, novoAluno) {
  arrayAlunos.push(novoAluno);
  return arrayAlunos;
}

let alunos = [
  { Nome: "Ana", Idade: 20 },
  { Nome: "Carlos", Idade: 22 },
];

let novoAluno = { Nome: "Maya", Idade: 18 };
let adicionando = adicionarAluno(alunos, novoAluno);

console.log(adicionando);

console.log("");
