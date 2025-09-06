console.log("------------------------------------------");
console.log("            DESAFIOS DA AULA 02           ");
console.log("          ### Desafio Mediano ###         ");
console.log("------------------------------------------");

// Crie uma função nomeCompleto que receba um objeto com as propriedades nome e sobrenome, e retorne uma string concatenando os dois.

function nomeCompleto(nome, sobrenome) {
  let pessoa = {
    Nome: nome,
    Sobrenome: sobrenome,
  };
  return pessoa;
}

console.log(nomeCompleto("Maria", "Oliveira"));

let registro = nomeCompleto("Maria", "Oliveira");
console.log(`O nome registrado foi:`, registro.Nome, registro.Sobrenome);

console.log("");
