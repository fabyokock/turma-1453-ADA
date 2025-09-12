console.log("-----------------------------------------------");
console.log("                  LAÇO COM WHILE               ");
console.log("-----------------------------------------------");

let n = 1;
while (n <= 5) {
  console.log(n);
  n++;
}

console.log("-----------------------------------------------");
console.log("                LAÇO COM FOR LET               ");
console.log("-----------------------------------------------");

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("-----------------------------------------------------------");
console.log("     ### 🌀 Exercícios com `for` (laço numérico)           ");
console.log("-----------------------------------------------------------");

// 1. **Contagem simples**

//     Use um `for` para imprimir os números de 1 a 10 no console.

// 2. **Tabuada**

//     Peça um número ao usuário (via `prompt`) e use um `for` para mostrar a tabuada desse número de 1 a 10.

// 3. **Soma dos números**

//     Use um `for` para somar todos os números de 1 a 100 e mostre o resultado no console.

console.log("-----------------------------------------------");
console.log("                CONTAGEM SIMPLES               ");
console.log("-----------------------------------------------");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("-----------------------------------------------");
console.log("                    TABUADA                    ");
console.log("-----------------------------------------------");

const tabuada = 5;
for (let i = 0; i <= 10; i++) {
  console.log(i * tabuada);
}

console.log("-----------------------------------------------");
console.log("               SOMA DOS NÚMEROS                ");
console.log("-----------------------------------------------");

let numero = 0;
for (let i = 0; i <= 100; i++) {
  numero = numero + i;
  console.log(numero);
}

console.log("-----------------------------------------------------------");
console.log("     ### 🔁 Exercícios com `while` (laço condicional)      ");
console.log("-----------------------------------------------------------");

// 1. **Contagem até 10**

//     Use um `while` para imprimir os números de 1 a 10 no console.

// 2. **Acumulador até limite**

//     Crie um `while` que some números inteiros a partir de 1 até que a soma seja maior que 50. Mostre o resultado.

console.log("-----------------------------------------------");
console.log("               **Contagem até 10**             ");
console.log("-----------------------------------------------");

let num = 0;
while (num <= 10) {
  console.log(num);
  num++;
}

console.log("-----------------------------------------------");
console.log("          **Acumulador até limite**            ");
console.log("-----------------------------------------------");

let numero1 = 0;
let numero2 = 0;
while (numero1 <= 51) {
  numero1 = numero1 + numero2;
  console.log(numero1);
  numero2++;
}

console.log("-----------------------------------------------");
console.log("          Métodos de Array - Foreach           ");
console.log("-----------------------------------------------");

const frutas = ["maça", "banana", "uva"];
frutas.forEach((frutas) => console.log(frutas));
