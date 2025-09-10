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
