// https://gemini.google.com/app/0806940a41d85125?hl=pt-BR

console.log("-----------------------------------------------");
console.log("                ### Exercício 1:               ");
console.log("           O Acesso à Festa Secreta            ");
console.log("-----------------------------------------------");

// Você está na entrada de uma festa ultra-exclusiva. O segurança tem uma regra simples: a pessoa só pode entrar se tiver exatamente 18 anos ou mais.

// Crie uma variável chamada idade e atribua a ela um número de sua escolha.

// Escreva uma estrutura de if/else para verificar a idade.

// Se a pessoa puder entrar, exiba a mensagem: "Bem-vindo à festa!".

// Se não, exiba: "Acesso negado.".

function verificarNomeEIdade(nome, idade) {
  let verificador = { nome: nome, idade: idade };
  return verificador;
}

let verificador = verificarNomeEIdade("Paulo", 16);

let nome = verificador.nome;
let idade = verificador.idade;

if (idade >= 18) {
  console.log(`Olá ${nome}, seja bem-vindo(a) à festa.`);
} else {
  console.log(`${nome}, o seu acesso à festa foi NEGADO!`);
}

console.log();

console.log("-----------------------------------------------");
console.log("                ### Exercício 2:               ");
console.log("        A Campanha de Descontos da Loja        ");
console.log("-----------------------------------------------");

// Uma loja de eletrônicos está com uma promoção de descontos: se o valor da compra for maior que 100 reais, o cliente ganha 10% de desconto. Caso contrário, não há desconto.

// Crie uma variável valorCompra com um valor.

// Crie uma variável desconto e a inicialize com 0.

// Usando a estrutura if/else, calcule o valor do desconto (que deve ser 10% de valorCompra) se a condição for verdadeira.

// Ao final, exiba o valorCompra original, o desconto e o valor final a ser pago.

let valorCompra = 100.0;
let desconto = 0;

if (valorCompra > 100) {
  desconto = 10;
  let valorFinal = valorCompra - valorCompra * (desconto / 100);
  console.log(`COM DESCONTO!`);
  console.log(
    `O valor de sua compra foi de ${valorCompra} reais, o seu desconto foi de ${desconto}% e o valor final a ser pago é ${valorFinal} reais.`
  );
} else {
  console.log(
    `Você não consumiu o valor mínimo para obter o desconto. Portanto o seu desconto é de ${desconto}%.`
  );
  console.log(
    `O valor de sua compra foi de ${valorCompra} reais, que é o valor a ser pago.`
  );
}

console.log();

console.log("-----------------------------------------------");
console.log("                ### Exercício 3:               ");
console.log("        A Classificação de Temperaturas        ");
console.log("-----------------------------------------------");

// Você está desenvolvendo um aplicativo de clima. Ele precisa categorizar a temperatura em três faixas: "Frio", "Agradável" e "Quente".

// "Frio": Se a temperatura for menor que 10 graus Celsius.

// "Agradável": Se a temperatura estiver entre 10 e 25 graus Celsius (incluindo 10 e 25).

// "Quente": Se a temperatura for maior que 25 graus Celsius.

// Crie uma variável temperatura com um valor.

// Use a estrutura if/else if/else para verificar em qual faixa a temperatura se encaixa e, em seguida, exiba a categoria correspondente.

function verificarTemperatura(temperatura) {
  return temperatura;
}

let temperatura = verificarTemperatura(26);

if (temperatura < 10) {
  console.log(
    `A temperatura está abaixo de ${temperatura}º, portanto, está FRIO.`
  );
} else if (temperatura >= 10 && temperatura <= 25) {
  console.log(
    `A temperatura está em ${temperatura}º, portanto, está AGRADÁVEL.`
  );
} else {
  console.log(`A temperatura está em ${temperatura}º, portanto, está QUENTE.`);
}

console.log("-----------------------------------------------");
console.log("                ### Exercício 4:               ");
console.log("        O Login no Sistema de E-Commerce       ");
console.log("-----------------------------------------------");
