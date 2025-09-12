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

console.log("-----------------------------------------------");
console.log("                ### Exercício 3:               ");
console.log("              Desconto em produto              ");
console.log("-----------------------------------------------");

// 4. Desconto em Produto
// o  Receber o valor de um produto.
// o  Se for maior que 100 reais, aplicar 10% de desconto.
// o  Caso contrário, aplicar 5%.

let valorFinal = (valorProduto) => {
  if (valorProduto > 100) {
    let precoFinal = valorProduto - valorProduto * 0.1;
    console.log(
      `Com o desconto de 10% aplicado, o valor final a ser pago é ${precoFinal} reais.`
    );
  } else {
    let precoFinal = valorProduto - valorProduto * 0.05;
    console.log(
      `Com o desconto de 5% aplicado, o valor final a ser pago é ${precoFinal} reais.`
    );
  }
};

valorFinal(100);

let valorFinal2 = (valorProduto) => {
  let precoFinal;
  if (valorProduto > 100) {
    precoFinal = valorProduto - valorProduto * 0.1;
  } else {
    precoFinal = valorProduto - valorProduto * 0.05;
  }
  return `O valor final a ser pago é ${precoFinal} reais.`;
};

console.log(valorFinal2(100));

console.log("-----------------------------------------------");
console.log("                ### Exercício 5:               ");
console.log("         Conversão de Nota em Conceito         ");
console.log("                com switch/case                ");
console.log("-----------------------------------------------");

// 5. **Conversão de Nota em Conceito**
//     - Receber uma nota (0 a 10).
//     - Usar `switch` para transformar em conceito:
//         - 9–10 → A
//         - 7–8 → B
//         - 5–6 → C
//         - abaixo de 5 → D

const nota1 = 6;

switch (true) {
  case nota1 > 9:
    console.log(`Aluno conceito A.`);
    break;
  case nota1 > 7:
    console.log(`Aluno conceito B.`);
    break;
  case nota1 > 5:
    console.log(`Aluno conceito C.`);
    break;
  default:
    console.log(`Aluno condeito D.`);
}

console.log("");

const nota = 10;

switch (nota) {
  case 10:
    console.log(`Aluno conceito A.`);
    break;
  case 9:
    console.log(`Aluno conceito A.`);
    break;
  case 8:
    console.log(`Aluno conceito B.`);
    break;
  case 7:
    console.log(`Aluno conceito B.`);
    break;
  case 6:
    console.log(`Aluno conceito C.`);
    break;
  case 5:
    console.log(`Aluno conceito C.`);
    break;
  default:
    console.log(`Aluno conceito D.`);
}
