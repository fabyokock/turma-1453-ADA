const tabela = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < tabela.length; i++) {
  console.log(tabela[i][0]);
  console.log(tabela[i][1]);
  console.log(tabela[i][2]);
}

for (let i = 0; i < tabela.length; i++) {
  for (let j = 0; j < tabela[i].length; j++) {
    console.log(tabela[i][j]);
  }
}

// ARRAY DE ARRAYS COM COLUNAS VARIÁVEIS (NÃO RECOMENDÁVEL: COLUNAS 'VAZIAS'.)

const tabela2 = [
  [1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11, 12],
];

for (let i = 0; i < tabela2.length; i++) {
  for (let j = 0; j < tabela2[i].length; j++) {
    console.log(tabela2[i][j]);
  }
}

// ARRAY DE ARRAYS COM COLUNAS VARIÁVEIS (RECOMENDÁVEL: COLUNAS 'PREENCHIDAS'.)
const tabela3 = [
  [1, null, null, 2, 3],
  [4, 5, 6, 7, null],
  [8, 9, 10, 11, 12],
];

for (let i = 0; i < tabela3.length; i++) {
  for (let j = 0; j < tabela3[i].length; j++) {
    console.log(tabela3[i][j]);
  }
}
