// https://bruno-cabral.notion.site/Exercicios-m-todos-de-array-63f752a22de94e7f8ac96f567a4f2639

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

console.log("-----------------------------------------------");
console.log("          EXERCÍCIOS MÉTODOS DE ARRAY          ");
console.log("                ### Exercício 8:               ");
console.log("                    find()                     ");
console.log("-----------------------------------------------");

// 1. Utilize o método "find" para encontrar o primeiro lugar que tenha capacidade máxima de pelo menos 10 pessoas.
// 2. Utilize o método "find" novamente para encontrar o primeiro lugar que tenha capacidade máxima de pelo menos 25 pessoas.
// 3. Utilize o método "find" mais uma vez para encontrar o primeiro lugar que tenha capacidade máxima de pelo menos 40 pessoas.
// 4. Verifique se você conseguiu utilizar o método "find" corretamente.

const lugares = [
  { nome: "Sala de Reuniões", capacidade: 8 },
  { nome: "Auditório", capacidade: 50 },
  { nome: "Sala de Treinamento", capacidade: 20 },
  { nome: "Sala de Conferências", capacidade: 30 },
  { nome: "Sala de Estudos", capacidade: 12 },
];

const capacidadeMaiorIgual10 = lugares.find(
  (lugares) => lugares.capacidade >= 10
);
console.log(
  `O primeiro lugar que tem capacidade máxima de pelo menos 10 pessoas é:`,
  capacidadeMaiorIgual10
);

const capacidadeMaiorIgual25 = lugares.find(function (lugares) {
  return lugares.capacidade >= 25;
});
console.log(
  `O primeiro lugar que tem capacidade máxima de pelo menos 25 pessoas é:`,
  capacidadeMaiorIgual25
);

const capacidadeMaiorIgual40 = lugares.find((lugares) => {
  return lugares.capacidade >= 40;
});
console.log(
  `O primeiro lugar que tem capacidade máxima de pelo menos 25 pessoas é:`,
  capacidadeMaiorIgual40
);

console.log("-----------------------------------------------");
console.log("          EXERCÍCIOS MÉTODOS DE ARRAY          ");
console.log("                ### Exercício 9:               ");
console.log("                   forEach()                   ");
console.log("-----------------------------------------------");

// 1. Utilize o método "forEach" para percorrer a lista de pizzas e imprimir no console o nome do sabor da pizza e seu valor.
// 2. Verifique se você conseguiu utilizar o método "forEach" corretamente.

const pizzas = [
  { sabor: "Mussarela", valor: 20 },
  { sabor: "Calabresa", valor: 25 },
  { sabor: "Marguerita", valor: 28 },
  { sabor: "Frango com Catupiry", valor: 32 },
  { sabor: "Portuguesa", valor: 30 },
];

pizzas.forEach((tipo) => {
  console.log(`A pizza ${tipo.sabor} custa ${tipo.valor} reais.`);
});

console.log("-----------------------------------------------");
console.log("          EXERCÍCIOS MÉTODOS DE ARRAY          ");
console.log("                ### Exercício 10:              ");
console.log("                      map()                    ");
console.log("-----------------------------------------------");

// 1. Utilize o método "map" para criar um novo array de objetos que contenha somente o nome e o IMC (índice de massa corporal) de cada pessoa, sendo que o IMC é calculado pela fórmula `peso / altura²`.
// 2. Verifique se você conseguiu utilizar o método "map" corretamente.

const pessoasMap = [
  { nome: "João", altura: 1.75, peso: 80 },
  { nome: "Maria", altura: 1.68, peso: 60 },
  { nome: "Pedro", altura: 1.8, peso: 70 },
  { nome: "Ana", altura: 1.65, peso: 55 },
  { nome: "Carlos", altura: 1.9, peso: 100 },
];

const pessoaImc = pessoasMap.map((pessoa) => {
  return {
    nome: pessoa.nome,
    imc: (pessoa.peso / pessoa.altura ** 2).toFixed(2),
  };
});

console.log(pessoaImc);

// pessoaImc.set(pessoasMap[0].nome, {
//   nome: pessoasMap[0].nome,
//   imc: (pessoasMap[0].peso / pessoasMap[0].altura ** 2).toFixed(2),
// });
// pessoaImc.set(pessoasMap[1].nome, {
//   nome: pessoasMap[1].nome,
//   imc: (pessoasMap[1].peso / pessoasMap[1].altura ** 2).toFixed(2),
// });
// pessoaImc.set(pessoasMap[2].nome, {
//   nome: pessoasMap[2].nome,
//   imc: (pessoasMap[2].peso / pessoasMap[2].altura ** 2).toFixed(2),
// });
// pessoaImc.set(pessoasMap[3].nome, {
//   nome: pessoasMap[3].nome,
//   imc: (pessoasMap[3].peso / pessoasMap[3].altura ** 2).toFixed(2),
// });
// pessoaImc.set(pessoasMap[4].nome, {
//   nome: pessoasMap[4].nome,
//   imc: (pessoasMap[4].peso / pessoasMap[4].altura ** 2).toFixed(2),
// });
// console.log(pessoaImc);

console.log("-----------------------------------------------");
console.log("          EXERCÍCIOS MÉTODOS DE ARRAY          ");
console.log("                ### Exercício 11:              ");
console.log("                     reduce()                  ");
console.log("-----------------------------------------------");

// 1. Utilize o método "map" para criar um novo objeto com o nome e a média de cada aluno.
// 2. A média deve ser calculada utilizando o método "reduce" para somar as notas e dividi-las pelo número de notas.
// 3. Verifique se você conseguiu utilizar o método "reduce" corretamente.

const alunosNotas = [
  { nome: "Ana", notas: [7, 8, 9] },
  { nome: "Pedro", notas: [5, 6, 7] },
  { nome: "Maria", notas: [9, 8, 10] },
  { nome: "João", notas: [6, 7, 8] },
  { nome: "Lucas", notas: [8, 9, 7] },
  { nome: "Julia", notas: [10, 8, 9] },
];

const mediaAlunos = alunosNotas.map((aluno) => {
  const soma = aluno.notas.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    0
  );
  const media = soma / aluno.notas.length;

  return {
    nome: aluno.nome,
    media: media.toFixed(2),
  };
});

console.log(mediaAlunos);

// Também funciona:
const mediaAlunos2 = alunosNotas.map((aluno) => ({
  nome: aluno.nome,
  media:
    aluno.notas.reduce((acumulado, nota) => acumulado + nota, 0) /
    aluno.notas.length,
}));

console.log(mediaAlunos2);

console.log("-----------------------------------------------");
console.log("          EXERCÍCIOS MÉTODOS DE ARRAY          ");
console.log("                ### Exercício 12:              ");
console.log("                    reverse()                  ");
console.log("-----------------------------------------------");

// 1. Utilize o método "reverse" para inverter a ordem dos elementos do array.
// 2. Verifique se a lista ficou com os elementos na ordem inversa: 5, 4, 3, 2, 1.

const numeros = [1, 2, 3, 4, 5];
const reverso = numeros.reverse();
console.log(reverso);

console.log("-----------------------------------------------");
console.log("          EXERCÍCIOS MÉTODOS DE ARRAY          ");
console.log("                ### Exercício 13:              ");
console.log("                      some()                   ");
console.log("-----------------------------------------------");

// 1. Utilize o método "some" para verificar se pelo menos um dos empregados tem salário maior ou igual a R$ 1.500,00.
// 2. Utilize o método "some" novamente para verificar se pelo menos um dos empregados tem salário menor ou igual a R$ 1.000,00.
// 3. Verifique se você conseguiu utilizar o método "some" corretamente.

const empregados = [
  { nome: "João", salario: 1200 },
  { nome: "Maria", salario: 1500 },
  { nome: "Pedro", salario: 1800 },
  { nome: "Ana", salario: 1400 },
  { nome: "Carlos", salario: 2000 },
];

const salarioMaior = empregados.some((empregado) => empregado.salario >= 1500);
console.log(
  `Há pelo menos um empregado com salário maior ou igual a R$ 1.500,00?`,
  salarioMaior
);

const salarioMenor = empregados.some((empregado) => {
  return empregado.salario <= 1000;
});
console.log(
  `Há pelo menos um empregado com salário menor ou igual a R$ 1.000,00?`,
  salarioMenor
);

console.log("-----------------------------------------------");
console.log("          EXERCÍCIOS MÉTODOS DE ARRAY          ");
console.log("                ### Exercício 14:              ");
console.log("                      sort()                   ");
console.log("-----------------------------------------------");

// 1. Utilize o método "sort" para ordenar a lista de atletas em ordem crescente de peso.
// 2. Utilize o método "sort" novamente para ordenar a lista de atletas em ordem decrescente de altura.
// 3. Utilize o método "sort" mais uma vez para ordenar a lista de atletas em ordem alfabética de nome.
// 4. Verifique se você conseguiu utilizar o método "sort" corretamente.

const atletas = [
  { nome: "João", altura: 1.75, peso: 80 },
  { nome: "Maria", altura: 1.68, peso: 60 },
  { nome: "Pedro", altura: 1.8, peso: 70 },
  { nome: "Ana", altura: 1.65, peso: 55 },
  { nome: "Carlos", altura: 1.9, peso: 100 },
];

const ordemPeso = atletas.sort((a, b) => a.peso - b.peso);
console.log(`Atletas ordenados por peso (crescente):`, ordemPeso);

const ordemAltura = atletas.sort(function (a, b) {
  return b.altura - a.altura;
});
console.log(`Atletas ordenados por altura (decrescente):`, ordemAltura);

const ordemAlfabetica = atletas.sort((a, b) => {
  return a.nome.localeCompare(b.nome);
});
console.log(`Atletas em ordem alfabética:`, ordemAlfabetica);

// Observação:
// ⚠️ Outra observação importante: você está chamando .sort() várias vezes no mesmo array (atletas).
// Como o .sort() modifica o array original, o resultado pode ficar confuso.
// 👉 Para evitar isso, é melhor fazer uma cópia antes de ordenar:

// const ordemPeso = [...atletas].sort((a, b) => a.peso - b.peso);
// const ordemAltura = [...atletas].sort((a, b) => b.altura - a.altura);
// const ordemAlfabetica = [...atletas].sort((a, b) =>
//   a.nome.localeCompare(b.nome)
// );
