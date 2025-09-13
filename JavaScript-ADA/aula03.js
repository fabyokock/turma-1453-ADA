// Houston, we have a problem!

// Precisamos descobrir quais alunos passaram de ano sendo que a média para ser aprovado é 6.0.

// Pedro n1: 6.0, n2: 8.0, n3: 5.5

// Tiago n1: 3.0, n2: 9.0, n3: 8.0

// João n1: 8.0, n2: 7.0, n3: 5.0

// Lucas n1: 2.0, n2: 8.0, n3: 7.0

function resultadoFinal(nome, n1, n2, n3) {
  let mediaNota = (n1 + n2 + n3) / 3;
  if (mediaNota >= 6) {
    console.log(`O aluno ${nome} está APROVADO.`);
  } else {
    console.log(`O aluno ${nome} está REPROVADO.`);
  }
}

resultadoFinal("Pedro", 6, 8, 5.5);

console.log("-----------------------------------------------");
console.log("             DICIONÁRIO - OBJETOS              ");
console.log("-----------------------------------------------");

const statusColors = {
  info: "#3498db", // azul
  success: "#2ecc71", // verde
  warning: "#f1c40f", // amarelo
  error: "#e74c3c", // vermelho
  neutral: "#95a5a6", // cinza
};

// const responseStatus = "info";

console.log(statusColors["info"]);

console.log(statusColors.warning);

const ptToEn = {
  olá: "Hello",
  "bem-vindo": "Welcome",
};

console.log(ptToEn["olá"]);

ptToEn["teste"] = "valor";
console.log(ptToEn);
console.log(ptToEn["teste"]);

console.log("-----------------------------------------------");
console.log("               DICIONÁRIO - MAP                ");
console.log("-----------------------------------------------");

// const notasAlunos = new Map();

// notasAlunos.set("João", 8.5);
// notasAlunos.set("Maria", 9.2);
// notasAlunos.set("Pedro", 7.8);

// console.log("Nota da Maria:", notasAlunos.get("Maria")); // 9.2

// console.log("Jorge está na lista?", notasAlunos.has("Jorge")); // true

// notasAlunos.delete("Pedro");

// console.log(notasAlunos);

// console.log("Quantidade de alunos:", notasAlunos.size);

// // Limpando o Map

const alunos = new Map([
  ["Joao", 8],
  ["Maria", 9],
  ["Antonio", 10],
]);
console.log(alunos);
