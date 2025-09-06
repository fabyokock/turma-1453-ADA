console.log("------------------------------------------");
console.log("          ### 1. Funções básicas");
console.log("------------------------------------------");

// 1. Crie uma função `boasVindas` que receba um **nome** como parâmetro e retorne a mensagem:
//     `"Seja bem-vindo, [nome]!"`.

function boasVindas(nome) {
  console.log(`Seja bem-vindo, ${nome}.`);
}
boasVindas("Fabyo");

console.log("");

// 2. Crie uma função soma que receba dois números e retorne o resultado.

function somaNumreros(num1, num2) {
  let soma = num1 + num2;
  console.log(`A soma entre os dois números informados é igual a ${soma}.`);
  return soma;
}
let resultadoFinal = somaNumreros(6, 6);

function dobrarValor(numero) {
  return numero * 2;
}

let valorDobrado = dobrarValor(resultadoFinal);
console.log(`O valor dobrado é: ${valorDobrado}.`);

// 3. Crie uma função quadrado que receba um número e retorne ele elevado ao quadrado.

function quadrado(numero) {
  let potencia = numero ** 2;
  let potencia2 = Math.pow(numero, 2);
  console.log(`O valor elevado ao quadrado é igual a: ${potencia}.`);
  console.log(`O valor elevado ao quadrado é igual a: ${potencia2}.`);
}
quadrado(3);

console.log("");

console.log("------------------------------------------");
console.log("          ### 2. Arrays básicos");
console.log("------------------------------------------");

// 1. Dado o array abaixo:
// let frutas = ["maçã", "banana", "uva", "laranja"];
// - Exiba o **primeiro** e o **último** item do array.

let frutas = ["maça", "banana", "uva", "laranja"];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[frutas.length - 1]);

console.log("");

// 2. Usando o mesmo array frutas, adicione "abacaxi" ao final com .push() e depois remova o primeiro com .shift().

let novaLista = frutas.push("abacaxi", "melancia");
console.log(frutas);
console.log(`A nova lista contém ${novaLista} itens`);

let lista02 = frutas.pop();
console.log(frutas);
console.log(`O item excluído do fim da lista foi: ${lista02}.`);

console.log("");

let lista03 = frutas.unshift("abacate", "melancia");
console.log(frutas);
console.log(`A nova lista contém ${lista03} itens.`);

let lista04 = frutas.shift();
console.log(frutas);
console.log(`O item excluído no início da lista foi: ${lista04}.`);

console.log("");

// 3. Crie uma função tamanhoDoArray que receba um array e retorne quantos elementos ele possui usando .length.

function tamanhoDoArray(array) {
  let tamanho = array.length;
  console.log(`A lista contém ${tamanho} itens.`);
  return array;
}
let verificarTamanho = ["cachorro", " gato", " papagaio"];
let itensDaLista = tamanhoDoArray(verificarTamanho);
console.log(`Os itens da lista são: ${itensDaLista}.`);

console.log("");

console.log("------------------------------------------");
console.log("         ### 3. Objetos básicos");
console.log("------------------------------------------");

// 1. Dado o objeto abaixo:
// Exiba o valor da `marca`.

let carro = {
  Marca: "Toyota",
  Modelo: "Corolla",
  Ano: 2020,
};

console.log(`A marca do carro é: ${carro.marca}.`);

// 2. Adicione uma nova propriedade `cor` ao objeto `carro` com o valor `"preto"`.

carro.Cor = "Preto";
console.log(`Esses são os dados completos do carro:`, carro);
console.log("");
console.log(`Ou`);
console.log("");
console.log(`Esses são os dados completos do carro:`);

for (let chave in carro) {
  console.log(`${chave}: ${carro[chave]}`);
}

console.log("");

// 3. Crie uma função `descricaoCarro` que receba um objeto `carro` e retorne uma string no formato:
//     `"Marca: [marca], Modelo: [modelo], Ano: [ano], Cor: [cor]"`.

function descricaoCarro(objeto) {
  console.log(`Exposição dos itens do "Objeto":`, objeto);
}
descricaoCarro(carro);

console.log("");

console.log("------------------------------------------");
console.log("         ### 4. Exercícios mistos");
console.log("------------------------------------------");

// 1. Crie uma função primeiroItem que receba um array e retorne o primeiro elemento.

function primeiroItem(array) {
  console.log(`O primeiro item da lista é:`, array[0]);
}

let numeros = [100, 200, 300, 400, 500];
console.log(`Aqui está a lista criada:`, numeros);

console.log("");

primeiroItem(numeros);

console.log("");

// 2. Crie uma função ultimoItem que receba um array e retorne o último elemento.

function ultimoItem(array) {
  console.log(
    `A última cidade que aparece na lista é:`,
    array[array.length - 1]
  );
}

let cidades = [
  "Vitória-ES",
  "Slavador-BA",
  "Florianópolis-SC",
  "Goiânia-GO",
  "Belém-PA",
];
ultimoItem(cidades);

console.log("");

// 3. Crie uma função criarPessoa que receba nome e idade como parâmetros e retorne um objeto pessoa com essas informações.

function criarPessoa(nome, idade) {
  let objetoPessoa = {
    Nome: nome,
    Idade: idade,
  };
  return objetoPessoa;
}
let registroCriado = criarPessoa("Pedro", 33);
console.log(`Aqui está o registro criado:`, registroCriado);

console.log("");

// 4. Usando a função criarPessoa, crie o array pessoas com 2 objetos:

function criaPessoa(nome, idade) {
  return {
    Nome: nome,
    Idade: idade,
  };
}

let registroCriado2 = [
  criaPessoa("Paulo", 65),
  criaPessoa("Barnabé", 57),
  criaPessoa("Tiago", 43),
];

// function criarPessoa02(nome1, idade1, nome2, idade2) {
//   let pessoas = [
//     {
//       Nome: nome1,
//       Idade: idade1,
//     },
//     {
//       Nome: nome2,
//       Idade: idade2,
//     },
//   ];
//   return pessoas;
// }

// let registroCriado2 = criarPessoa02("Paulo", 65, "Barnabé", 57);
console.log(`Aqui está o novo registro criado:`, registroCriado2);

console.log("");

// 05. Crie uma função idadeDaPrimeiraPessoa que receba o array pessoas e retorne a idade da primeira pessoa.

function idadeDaPrimeiraPessoa(array) {
  let pessoa = array[0].Nome;
  let idade = array[0].Idade;
  console.log(
    `A primeira pessoa da lista é ${pessoa}. A idade de ${pessoa} é ${idade} anos.`
  );
  return { pessoa, idade };
}
let identificacao = idadeDaPrimeiraPessoa(registroCriado2);

console.log("");

console.log(`A primeira pessoa da lista é:`, identificacao.pessoa);
console.log(`A idade dessa pessoa é:`, identificacao.idade, `anos.`);

console.log("");
