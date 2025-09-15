// https://bruno-cabral.notion.site/Exerc-cios-para-praticar-98bec007dcf743ac97d9cbf54b7f0e96

console.log("-----------------------------------------------");
console.log("           Exercícios de if-else               ");
console.log("               Exercício Fácil                 ");
console.log("-----------------------------------------------");

// Escreva um programa em JavaScript que verifica se um número é positivo, negativo ou igual a zero. Use a estrutura if-else para realizar essa verificação.

let numero = 0;
if (numero > 0) {
  console.log(`O número digitado é POSITIVO.`);
} else if (numero < 0) {
  `O número digitado é NEGATIVO.`;
} else {
  console.log(`O número digitado foi '0'.`);
}

console.log("-----------------------------------------------");
console.log("           Exercícios de if-else               ");
console.log("            Exercício Moderado                 ");
console.log("-----------------------------------------------");

// Escreva um programa em JavaScript que verifica se um número é par ou ímpar. Use a estrutura if-else para realizar essa verificação.

let parOuImpar = 0;

if (parOuImpar % 2 === 0) {
  console.log(`O número digitado é PAR.`);
} else {
  console.log(`O número digitado é ÍMPAR.`);
}

console.log(``);

console.log(`***********************************************`);
console.log(`***********************************************`);
console.log(`***********************************************`);

console.log("-----------------------------------------------");
console.log("           Exercícios de switch/case           ");
console.log("                Exercício Fácil                ");
console.log("-----------------------------------------------");

// Escreva um programa em JavaScript que recebe uma cor em inglês e retorna o seu nome em português. Utilize a estrutura switch/case para realizar essa verificação. As cores podem ser: "red" (vermelho), "blue" (azul), "green" (verde), "yellow" (amarelo) e "black" (preto).

const cor = "Orange";

switch (cor) {
  case "White":
    console.log("Branco");
    break;
  case "Black":
    console.log("Preto");
    break;
  case "Red":
    console.log("Vermelho");
    break;
  case "Blue":
    console.log("Azul");
    break;
  case "Green":
    console.log("Verde");
    break;
  case "Yellow":
    console.log("Amarelo");
    break;
  default:
    console.log("Informe outra cor!");
}

console.log("-----------------------------------------------");
console.log("           Exercícios de switch/case           ");
console.log("               Exercício Moderado              ");
console.log("-----------------------------------------------");

// Escreva um programa em JavaScript que recebe um número de 1 a 12 e retorna o mês correspondente. Caso seja um número inválido retorna "Número inválido.” Utilize a estrutura switch/case para realizar essa verificação.

const numero1A12 = 11;

switch (numero1A12) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Maio");
    break;
  case 6:
    console.log("Junho");
    break;
  case 7:
    console.log("Julho");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Setembro");
    break;
  case 10:
    console.log("Outubro");
    break;
  case 11:
    console.log("Novembro");
    break;
  case 12:
    console.log("Dezembro");
    break;
  default:
    console.log("Numero inválido! Informe outro número.");
}

console.log(``);

console.log(`***********************************************`);
console.log(`***********************************************`);
console.log(`***********************************************`);

console.log("-----------------------------------------------");
console.log("              Exercícios de while              ");
console.log("                Exercício Fácil                ");
console.log("-----------------------------------------------");

// Escreva um programa em JavaScript que imprima todos os números de 1 a 10 utilizando um loop while.
let n = 0;

while (n <= 10) {
  n = n + 1;
  console.log(n);
}

console.log("-----------------------------------------------");
console.log("              Exercícios de while              ");
console.log("               Exercício Moderado              ");
console.log("-----------------------------------------------");

// Escreva um programa em JavaScript que calcule a soma dos números de 1 a 100 utilizando um loop while. Imprima o resultado no final.

let somaN = 0;
let soma = 0;

while (somaN <= 100) {
  // somaN = somaN + 1;
  soma = soma + somaN;
  somaN++;
}

console.log(soma);
