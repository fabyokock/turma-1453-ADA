console.log("---------------------------------------");
console.log("            RESULTADO FINAL            ");
console.log("---------------------------------------");

// const media = [
//   [6, 8, 5.5],
//   [3, 9, 8],
//   [8, 7, 5],
// ];

// const mediaPedro = (media[0][0] + media[0][1] + media[0][2]) / 3;
// console.log(`A média do aluno Pedro é ${mediaPedro.toFixed(2)}.`);

// const mediaTiago = (media[1][0] + media[1][1] + media[1][2]) / 3;
// console.log(`A média do aluno Tiago é ${mediaTiago.toFixed(2)}.`);

// const mediaJoao = (media[2][0] + media[2][1] + media[2][2]) / 3;
// console.log(`A média do aluno João é ${mediaJoao.toFixed(2)}.`);

const alunos = [
  {
    nome: "Pedro",
    notas: [6, 8, 5.5],
  },
  {
    nome: "Tiago",
    notas: [3, 9, 8],
  },
  {
    nome: "Joao",
    notas: [8, 7, 5],
  },
];

function printNameAndMedia(nome, notas) {
  const somaDasNotas = notas[0] + notas[1] + notas[2];
  const media = somaDasNotas / notas.length;
  console.log(`Nome: ${nome}. Média: ${media}.`);
}

printNameAndMedia(alunos[0].nome, alunos[0].notas);
console.log(alunos[0].notas);
