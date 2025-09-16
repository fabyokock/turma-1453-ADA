// https://bruno-cabral.notion.site/Exerc-cios-para-praticar-98bec007dcf743ac97d9cbf54b7f0e96

console.log("-----------------------------------------------");
console.log("           Exercícios de if-else               ");
console.log("            POSITIVO ou NEGATIVO               ");
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
console.log("               PAR ou ÍMPAR                    ");
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

console.log("-----------------------------------------------");
console.log("           Exercícios de if-else               ");
console.log("            DIVISÍVEL POR 3 e 5                ");
console.log("          Exercício Intermediário              ");
console.log("-----------------------------------------------");

// Escreva um programa em JavaScript que verifica se um número é divisível por 3 e por 5 ao mesmo tempo. Use a estrutura if-else para realizar essa verificação.

const n3ou5 = 9;

if (n3ou5 % 3 === 0 && n3ou5 % 5 === 0) {
  console.log("O número informado é divisível por 3 e 5 ao mesmo tempo.");
} else {
  console.log("O número informado não é divisível por 3 e 5 ao mesmo tempo.");
}

console.log(`***********************************************`);
console.log(`***********************************************`);
console.log(`***********************************************`);

console.log("-----------------------------------------------");
console.log("           Exercícios de switch/case           ");
console.log("             INGLÊS para PORTUGUÊS             ");
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
console.log("               MÊS CORREPONDENTE               ");
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

console.log("-----------------------------------------------");
console.log("           Exercícios de switch/case           ");
console.log("              VOGAL ou CONSOANTE               ");
console.log("            Exercício intermediário            ");
console.log("-----------------------------------------------");

// Escreva um programa em JavaScript que recebe uma letra do alfabeto e retorna se é uma vogal ou uma consoante.  Utilize a estrutura switch/case para realizar essa verificação.

const vogalOuConsoante = "a";

switch (vogalOuConsoante) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log(`A letra informada é uma vogal.`);
    break;
  case "b":
  case "c":
  case "d":
  case "f":
  case "g":
  case "h":
  case "j":
  case "k":
  case "l":
  case "m":
  case "n":
  case "p":
  case "q":
  case "r":
  case "s":
  case "t":
  case "v":
  case "w":
  case "x":
  case "y":
  case "z":
    console.log(`A letra informada é uma consoante.`);
    break;
  default:
    console.log(`Caractere inválido. Digite uma letra minúscula.`);
}

const letra = "a";

switch (letra) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("A letra informada é uma vogal.");
    break;

  default:
    // verifica se é realmente uma letra do alfabeto
    if (letra >= "a" && letra <= "z") {
      console.log("A letra informada é uma consoante.");
    } else {
      console.log("Caractere inválido. Digite uma letra minúscula.");
    }
}

console.log(``);

console.log(`***********************************************`);
console.log(`***********************************************`);
console.log(`***********************************************`);

console.log("-----------------------------------------------");
console.log("              Exercícios de while              ");
console.log("               IMPRIMIR de 1 a 10              ");
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
console.log("                SOMAR de 1 a 100                ");
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
