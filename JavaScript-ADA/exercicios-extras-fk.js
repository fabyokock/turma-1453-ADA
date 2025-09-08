console.log("-----------------------------------------------");
console.log("                ### Exercício 1:               ");
console.log("         Gerenciando a lista de tarefas        ");
console.log("-----------------------------------------------");

// Imagine que você está criando um aplicativo de lista de tarefas. Sua primeira tarefa é organizar as tarefas de hoje.

// Sua missão: Crie um array chamado tarefasDiarias com as seguintes tarefas em ordem: "Estudar JavaScript", "Ir à academia", "Comprar pão", "Revisar código".

// Depois, mostre no console qual é a primeira tarefa do dia. Em seguida, imagine que você já concluiu essa tarefa. Adicione uma nova tarefa chamada "Preparar o jantar" no final da sua lista. Mostre a lista completa atualizada no console.

let tarefasDiarias = [
  "Estudar JavaScript",
  "Ir a academia",
  "Comprar pão",
  "Revisar código",
];
console.log(tarefasDiarias);
console.log(`A primeira tarefa do dia é: ${tarefasDiarias[0]}.`);

// tarefasDiarias[tarefasDiarias.length] = "Preparar o jantar";
tarefasDiarias.push("Preparar o jantar");
console.log(tarefasDiarias);

console.log("-----------------------------------------------");
console.log("                ### Exercício 2:               ");
console.log("             O cadastro do cliente             ");
console.log("-----------------------------------------------");

// Você está desenvolvendo o sistema de cadastro de clientes para uma loja online. A cada novo cliente, um "objeto" é criado com suas informações.

// Sua missão: Crie um objeto chamado cliente com as seguintes propriedades:

// nome (string): "Maria"

// idade (number): 30

// compraRecente (boolean): true

// Mostre no console apenas a idade da cliente. Em seguida, imagine que a cliente fez uma nova compra. Adicione uma nova propriedade ao objeto chamada valorTotalGasto com o valor de 150.75 (número). Mostre o objeto cliente completo e atualizado no console.

let clientes = {
  nome: String("Maria"),
  idade: Number(30),
  compraRecente: Boolean(true),
};
console.log(`A idade do cliente é: ${clientes["idade"]} anos.`);

clientes["valorTotalGasto"] = Number(150.75);
console.log(clientes);

console.log("-----------------------------------------------");
console.log("                ### Exercício 3:               ");
console.log("              Calculando a gorjeta             ");
console.log("-----------------------------------------------");

// Você está em um restaurante e precisa calcular a gorjeta para o garçom de forma eficiente.

// Sua missão: Crie uma função chamada calcularGorjeta que receba dois parâmetros: valorConta e porcentagemGorjeta.

// Dentro da função, calcule o valor da gorjeta e, depois, o valor total a ser pago (conta + gorjeta). A função deve retornar o valor total a ser pago.

// Chame a função com um valorConta de 85 e uma porcentagemGorjeta de 15, e mostre o resultado no console.

function calcularGorjeta(valorConta, porcentagemGorjeta) {
  let gorjeta = valorConta * porcentagemGorjeta;
  let valorTotal = valorConta + gorjeta;
  return valorTotal;
}

let valorFinal = calcularGorjeta(85, 0.15);
console.log(`O valor final da conta foi: ${valorFinal} reais.`);

console.log("-----------------------------------------------");
console.log("                ### Exercício 4:               ");
console.log("             Relatório de produtos             ");
console.log("-----------------------------------------------");
// Em um sistema de estoque, você precisa gerar um relatório rápido sobre os produtos disponíveis.

// Sua missão: Crie um array chamado produtos que contenha os nomes de três produtos (strings): "Mouse", "Teclado", "Monitor".

// Crie uma função chamada gerarRelatorio que receba um array como parâmetro. Dentro da função, imprima no console a quantidade total de produtos (usando a propriedade .length). Em seguida, imprima o primeiro e o último item do array usando a sua função.

let produtos = ["Mouse", "Teclado", "Monitor"];

function gerarRelatorio(array) {
  console.log(`A quantidade total de produtos é: ${array.length}`);
  console.log(`O primeiro item da lista é: ${array[0]}.`);
  console.log(`O último item da lista é: ${array[array.length - 1]}.`);
}

gerarRelatorio(produtos);

console.log("-----------------------------------------------");
console.log("                ### Exercício 5:               ");
console.log("            Média de notas da turma            ");
console.log("-----------------------------------------------");

// Você é um professor e precisa calcular a média das notas de uma turma.

// Sua missão: Considere o seguinte array de objetos:

// Crie uma função chamada calcularMediaAluno que receba um único objeto de aluno como parâmetro. Dentro da função, some as notas desse aluno e calcule a média. A função deve retornar a média.

// Em seguida, use essa função para calcular e mostrar no console a média de cada aluno individualmente.

const alunos = [
  { nome: "João", notas: [8, 7, 9] },
  { nome: "Maria", notas: [6, 8, 7] },
  { nome: "Pedro", notas: [9, 9.5, 8] },
];

function calcularMediaAluno(objeto, indice) {
  let somaDasNotas =
    objeto[indice].notas[0] + objeto[indice].notas[1] + objeto[indice].notas[2];
  // console.log(somaDasNotas);
  let mediaDasNotas = somaDasNotas / objeto[indice].notas.length;
  return mediaDasNotas;
}

console.log(
  `A média do aluno ${alunos[0].nome} é:`,
  calcularMediaAluno(alunos, 0)
);
console.log(
  `A média do aluno ${alunos[1].nome} é:`,
  calcularMediaAluno(alunos, 1)
);
console.log(
  `A média do aluno ${alunos[2].nome} é:`,
  calcularMediaAluno(alunos, 2)
);

const arr = [10, 10, 11];
console.log(arr.find((o) => o == 11)); // -> 11
console.log(arr.find((o) => o == 12)); // -> undefined
