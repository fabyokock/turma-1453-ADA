console.log("-----------------------------------------------");
console.log("                ### Exercício 1:               ");
console.log("              Gerenciando tarefas              ");
console.log("-----------------------------------------------");

// Imagine que você está começando um novo projeto de desenvolvimento web. Sua primeira tarefa é criar uma lista de tarefas. A equipe te passa as duas primeiras atividades para a lista: "Criar login" e "Desenhar interface". Depois de um tempo, um bug crítico é descoberto, e a tarefa "Corrigir bug do carrinho" se torna a mais urgente.

// Sua missão:

// Comece com um array vazio chamado listaDeTarefas.

// Adicione as duas primeiras tarefas ao final do array.

// Adicione a tarefa urgente ao início do array.

// Como ficará o seu array listaDeTarefas no final?

const listaDeTarefas = [];
console.log(listaDeTarefas);
listaDeTarefas.push("Criar login", "Desenhar interface");
console.log(listaDeTarefas);
console.log(listaDeTarefas.push());
listaDeTarefas.unshift("Corrigir bug do carrinho");
console.log(listaDeTarefas);
console.log(listaDeTarefas.unshift());
console.log(`A lista final de tarefas ficou assim:`, listaDeTarefas);
console.log("");

console.log("-----------------------------------------------");
console.log("                ### Exercício 2:               ");
console.log("           O Catálogo da Biblioteca            ");
console.log("-----------------------------------------------");

// Você é o novo bibliotecário e precisa verificar rapidamente se um autor está disponível no acervo. Você tem uma lista de autores em um array e um visitante da biblioteca pergunta se o autor "Stephen King" está presente.

// Sua missão:

// Considere o array autores = ['J.K. Rowling', 'J.R.R. Tolkien', 'George Orwell', 'Isaac Asimov'].

// Escreva uma linha de código que verifique se o nome "Stephen King" existe neste array.

// Armazene o resultado dessa verificação em uma variável chamada autorPresente.

// Qual será o valor da variável autorPresente?

const autores = [
  "J.K. Rowling",
  "J.R.R. Tolkien",
  "George Orwell",
  "Isaac Asimov",
];
console.log(autores);

let autorPresente = autores.find((autor) => {
  return autor == "Stephen King";
});

let autorPresente2 = autores.find((autor) => autor == "J.K. Rowling");

console.log(autorPresente);
console.log(autorPresente2);
console.log(autores.includes("J.K. Rowling"));

console.log("");

console.log("-----------------------------------------------");
console.log("                ### Exercício 3:               ");
console.log("          Ordenando Preços de Produtos         ");
console.log("-----------------------------------------------");

// Exercício 3: Ordenando Preços de Produtos
// Você está trabalhando em um e-commerce e precisa exibir os produtos para os clientes de uma forma organizada. A gerência pediu para que os preços fossem listados do menor para o maior, para que o cliente possa visualizar as opções mais econômicas primeiro.

// Sua missão:

// Considere o array de preços precos = [12.50, 5.99, 100.00, 25.75].

// Use o método de ordenação para organizar este array em ordem crescente.

// Como ficará o array precos depois dessa operação?

const precos = [12.5, 5.99, 100.0, 25, 75];
console.log(precos);
precos.sort((a, b) => a - b);
console.log(precos);
precos.sort((a, b) => {
  return b - a;
});
console.log(precos);

console.log("");

console.log("-----------------------------------------------");
console.log("                ### Exercício 4:               ");
console.log("         Atualizando a Lista de Espera         ");
console.log("-----------------------------------------------");

// Em uma lista de espera para um evento, duas pessoas que estavam no meio da lista acabaram desistindo. Você precisa removê-las para que a lista fique correta e, ao mesmo tempo, guardar os nomes delas em outro lugar para um registro futuro.

// Sua missão:

// Considere o array listaDeEspera = ['João', 'Maria', 'Pedro', 'Ana', 'Luisa', 'Carlos', 'Sofia'].

// Remova a Ana e a Luisa do array.

// Guarde os nomes removidos em uma nova variável chamada removidos.

// Como ficam os arrays listaDeEspera e removidos no final da operação?

const listaDeEspera = [
  "João",
  "Maria",
  "Pedro",
  "Ana",
  "Luisa",
  "Carlos",
  "Sofia",
];
console.log(
  `Estas são as pessoas que estão na lista de espera:`,
  listaDeEspera
);

let removidosDaLista = listaDeEspera.splice(3, 2);
console.log(`Esta é a lista atualizada:`, listaDeEspera);
console.log(`Os nomes removidos da lista foram:`, removidosDaLista);

listaDeEspera.splice(3, 0, "Joana", "Gerusa");
console.log(`Assim ficou a lista de espera atual:`, listaDeEspera);

console.log("-----------------------------------------------");
console.log("                ### Exercício 5:               ");
console.log("           Classificação de Atletas            ");
console.log("-----------------------------------------------");

// Em um torneio de e-sports, apenas os jogadores com pontuação igual ou superior a 100 se classificam para a próxima fase. Você tem um array com as pontuações de todos os competidores.

// Sua missão:

// Considere o array pontuacoes = [85, 110, 95, 120, 105, 90, 80].

// Crie um novo array, chamado classificados, que contenha apenas as pontuações que se qualificam para a próxima fase.

// Como ficará o array classificados no final?

const pontuacoes = [85, 110, 95, 120, 105, 90, 80];
console.log(pontuacoes);

let classificados = pontuacoes.filter((o) => o >= 100);
console.log(`A pontuação dos classificados foi:`, classificados);
