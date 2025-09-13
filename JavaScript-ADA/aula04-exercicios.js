console.log("-----------------------------------------------");
console.log("          EXERCÍCIOS MÉTODOS DE ARRAY          ");
console.log("                ### Exercício 1:               ");
console.log("                     push()                    ");
console.log("-----------------------------------------------");

// 1. Crie um novo array vazio.
// 2. Utilize o método "push" para adicionar um elemento ao final do array.
// 3. Utilize o método "push" novamente para adicionar outro elemento ao final do array.
// 4. Verifique o comprimento (length) do array para confirmar que os elementos foram adicionados corretamente.

const ingredientes = ["Leite", "Açucar", "Manteiga"];
console.log(ingredientes);
ingredientes.push("Fermento");
console.log(ingredientes);
ingredientes.push("Trigo", "Ovos");
console.log(ingredientes);
console.log(`A quantidade de itens nessa lista é: `, ingredientes.length);

console.log("-----------------------------------------------");
console.log("          EXERCÍCIOS MÉTODOS DE ARRAY          ");
console.log("                ### Exercício 2:               ");
console.log("                     pop()                     ");
console.log("-----------------------------------------------");

// 1. Utilize o método "pop" para remover o último elemento do array.
// 2. Verifique o comprimento (length) do array para confirmar que o elemento foi removido corretamente.
// 3. Utilize o método "pop" novamente para remover outro elemento do array.
// 4. Verifique o comprimento (length) do array novamente para confirmar que o segundo elemento foi removido corretamente.

const listaSupermercado = [
  "Arroz",
  "Feijão",
  "Açucar",
  "Farinha",
  "Macarrão",
  "Óleo",
];
console.log(listaSupermercado);
let removido = listaSupermercado.pop();
console.log(`O item removido foi: ${removido}.`);
console.log(listaSupermercado);
console.log(`A quantidade de itens nessa lista é ${listaSupermercado.length}.`);
console.log(`O outro item removido foi: ${listaSupermercado.pop()}.`);
console.log(listaSupermercado);
console.log(
  `A quantidade atual de itens na lista é: ${listaSupermercado.length}.`
);

console.log("-----------------------------------------------");
console.log("          EXERCÍCIOS MÉTODOS DE ARRAY          ");
console.log("                ### Exercício 3:               ");
console.log("                    shift()                    ");
console.log("-----------------------------------------------");

// 1. Utilize o método "shift" para remover o primeiro elemento do array.
// 2. Verifique o comprimento (length) do array para confirmar que o elemento foi removido corretamente.
// 3. Utilize o método "shift" novamente para remover outro elemento do array.
// 4. Verifique o comprimento (length) do array novamente para confirmar que o segundo elemento foi removido corretamente.

const listaMercado = [
  "Arroz",
  "Feijão",
  "Açucar",
  "Farinha",
  "Macarrão",
  "Óleo",
];
console.log(listaMercado);
let removido2 = listaMercado.shift();
console.log(`O item removido da lista foi: ${removido2}.`);
console.log(`O total de itens da lista é: ${listaMercado.length}.`);
console.log(`A lista ficou assim:`, listaMercado);
console.log(`O outro item removido foi: ${listaMercado.shift()}.`);
console.log(`Agora, o total de itens da lista é ${listaMercado.length}.`);
console.log(`Por fim, a lista ficou assim:`, listaMercado);

console.log("-----------------------------------------------");
console.log("          EXERCÍCIOS MÉTODOS DE ARRAY          ");
console.log("                ### Exercício 4:               ");
console.log("                      at()                     ");
console.log("-----------------------------------------------");

// 1. Utilize o método "at" para acessar o primeiro elemento do array. Lembre-se de que o índice do primeiro elemento é 0.
// 2. Utilize o método "at" novamente para acessar o terceiro elemento do array.
// 3. Utilize o método "at" mais uma vez para acessar o último elemento do array. Lembre-se de que o índice do último elemento é o comprimento do array menos 1.
// 4. Verifique se você conseguiu acessar os elementos corretamente.

const produtos = ["Sabão", "Detergente", "Amaciante", "Alvejante", "Sapólio"];
console.log(`Essa é a lista inicial dos produtos:`, produtos);
console.log(`O primeiro produto da lista é: ${produtos.at(0)}.`);
console.log(`O terceiro produto da lista é: ${produtos.at(2)}.`);
console.log(`O último produto da lista é: ${produtos.at(-1)}.`);

console.log("-----------------------------------------------");
console.log("          EXERCÍCIOS MÉTODOS DE ARRAY          ");
console.log("                ### Exercício 5:               ");
console.log("                    concat()                   ");
console.log("-----------------------------------------------");

// 1. Utilize o método "concat" para mesclar a lista1 e lista2 em um novo array.
// 2. Verifique o comprimento (length) do novo array para confirmar que os elementos foram mesclados corretamente.
// 3. Tente utilizar o método "concat" com mais algumas listas, mesclando todas em uma só.

const lista1 = ["Banana", "Pêra", "Melancia"];
const lista2 = ["Alface", "Tomate", "Rúcula"];
const lista3 = ["Limão", "Laranja", "Acerola"];
const lista4 = ["Pimenta", "Pimentão", "Alho"];

const novaLista = lista1.concat(lista2);
console.log(
  `A lista, após a concatenação das listas 1 e 2, ficou assim:`,
  novaLista
);
console.log(`A lista concatenada possui ${novaLista.length} itens.`);

const listaFinal = lista1.concat(lista2, lista3, lista4);
console.log(
  `A lista final, após todas as concatenações, ficou assim:`,
  listaFinal
);
console.log(`A lista final possui ${listaFinal.length} ietns.`);

console.log("-----------------------------------------------");
console.log("          EXERCÍCIOS MÉTODOS DE ARRAY          ");
console.log("                ### Exercício 6:               ");
console.log("                    every()                    ");
console.log("-----------------------------------------------");

// 1. Utilize o método "every" para verificar se todos os alunos têm idade maior ou igual a 18 anos.
// 2. Utilize o método "every" novamente para verificar se todos os alunos têm nome com mais de 3 caracteres.
// 3. Utilize o método "every" mais uma vez para verificar se todos os alunos têm idade e nome definidos.
// 4. Verifique se você conseguiu utilizar o método "every" corretamente.

let pessoas = [
  { nome: "João", idade: 22 },
  { nome: "Maria", idade: 17 },
  { nome: "Pedro", idade: 18 },
  { nome: "Ana", idade: 22 },
  { nome: "Carlos", idade: 16 },
];

const verificaIdade = pessoas.every((pessoas) => {
  return pessoas.idade >= 18;
});

console.log(
  `Todos os alunos têm idade maior ou igual a 18 anos? ${verificaIdade}.`
);

const caracteres = pessoas.every((pessoas) => {
  return pessoas.nome.length > 3;
});

console.log(
  `Todos os alunos têm nome com mais de 3 caracteres? ${caracteres}.`
);

const chavesDefinidadas = pessoas.every((pessoas) => {
  return pessoas.nome != "" && pessoas.idade >= 0;
});

console.log(
  `Todos os alunos têm idade e nome definidos? ${chavesDefinidadas}.`
);

console.log("-----------------------------------------------");
console.log("          EXERCÍCIOS MÉTODOS DE ARRAY          ");
console.log("                ### Exercício 7:               ");
console.log("                    filter()                   ");
console.log("-----------------------------------------------");

// 1. Utilize o método "filter" para criar um novo array com os alunos que têm idade maior ou igual a 18 anos.
// 2. Utilize o método "filter" novamente para criar um novo array com os alunos que têm idade menor que 20 anos.
// 3. Utilize o método "filter" mais uma vez para criar um novo array com os alunos cujo nome começa com a letra "J".
// 4. Verifique se você conseguiu utilizar o método "filter" corretamente.

const alunos = [
  { nome: "Ana", idade: 20 },
  { nome: "Pedro", idade: 18 },
  { nome: "Maria", idade: 22 },
  { nome: "João", idade: 17 },
  { nome: "Lucas", idade: 19 },
  { nome: "Julia", idade: 21 },
];

const maiorDeIdade = alunos.filter((pessoas) => pessoas.idade >= 18);
console.log(`Os alunos maiores de idade são:`, maiorDeIdade);

const menor20Anos = alunos.filter((aluno) => aluno.idade < 20);
console.log(`Os alunos que têm idade menor que 20 anos são:`, menor20Anos);

const comecaComJ = alunos.filter((aluno) => aluno.nome[0] === "J");
console.log(`Os alunos cujo nome começa com a letra "J" são:`, comecaComJ);
