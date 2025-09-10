console.log("-----------------------------------------------");
console.log("                ### Exercício 1:               ");
console.log("                 Cálculo de IMC                ");
console.log("-----------------------------------------------");
// - Peça nome, peso e altura de uma pessoa.
// - Calcule o IMC: `peso / (altura * altura)`.
// - Informe a classificação:
// Faixa de IMC	Classificação
// Menor que 18,5	Abaixo do peso
// 18,5 – 24,9	Peso normal
// 25,0 – 29,9	Sobrepeso
// 30,0 – 34,9	Obesidade grau I
// 35,0 – 39,9	Obesidade grau II
// 40,0 ou mais	Obesidade grau III

function calcularIMC(peso, altura) {
  let imc = peso / altura ** 2;

  if (imc < 18.5) {
    console.log(`Você está abaixo do peso.`);
  } else if (imc <= 24.9) {
    console.log(`O seu peso é normal.`);
  } else if (imc <= 29.9) {
    console.log(`Você está com sobrepeso.`);
  } else if (imc <= 34.9) {
    console.log(`Você está com obesidade grau I.`);
  } else if (imc <= 39.9) {
    console.log(`Você está com obesidade grau II.`);
  } else {
    console.log(`Você está com obesidade grau III.`);
  }
}

calcularIMC(130, 1.75);

console.log("-----------------------------------------------");
console.log("                ### Exercício 2:               ");
console.log("               Categoria de Idade              ");
console.log("-----------------------------------------------");

// - Receber a idade de uma pessoa.
// - Mostrar a faixa etária:
//     - Criança (0–12)
//     - Adolescente (13–17)
//     - Adulto (18–59)
//     - Idoso (60+)

function categoriaIdade(idade) {
  if (idade <= 12) {
    console.log(`Idade menor ou igual a 12 anos é CRIANÇA.`);
  } else if (idade <= 17) {
    console.log(`Idade entre 13 e 17 anos é AOLESCENTE.`);
  } else if (idade <= 59) {
    console.log(`Idade entre 18 e 59 anos é ADULTO.`);
  } else {
    console.log(`Idade maior ou igual a 60 anos é IDOSO.`);
  }
}

categoriaIdade(12);

console.log("-----------------------------------------------");
console.log("                ### Exercício 3:               ");
console.log("          Verificação de Par ou Ímpar          ");
console.log("             Com Operador Ternário             ");
console.log("-----------------------------------------------");

// - Receber um número inteiro.
// - Usar o operador ternário para mostrar se é **par** ou **ímpar**.

const parImpar = (numero) =>
  numero % 2 === 0
    ? "O número informado é PAR."
    : "O número informado é ÍMPAR.";

console.log(parImpar(22554));

function verificarParImpar(n1) {
  let parOuImpar =
    n1 % 2 === 0 ? "O número informado é PAR." : "O número informado é ÍMPAR.";
  return parOuImpar;
}

console.log(verificarParImpar(17));
