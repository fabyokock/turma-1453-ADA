// ARROW FUNCTION

// Quando você escreve arr.find((o) => o == 12), a parte (o) => o == 12 é uma função de callback. O (o) dentro do parêntese é o parâmetro dessa função.

// A função find() chama a sua função de callback para cada elemento do array e passa o elemento atual como o primeiro argumento. Portanto, o nome que você dá ao parâmetro (o) será o nome da variável que representará cada elemento do array durante a iteração.

// Usando "elemento", ou outro valor qualquer ('item', 'valor', etc ) - (forma mais descritiva)
// const arr = [10, 10, 11];
// console.log(arr.find((elemento) => elemento == 11));
// // Saída: 11

const arr = [10, 10, 11];
console.log(arr.find((o) => o == 11)); // -> 11
console.log(arr.find((o) => o == 12)); // -> undefined

// EXISTE OUTRA FORMA DE ESCREVER O 'ARROW FUNCTION'?

// Sim, existem outras formas de escrever a mesma sintaxe para o método find(). A diferença está na maneira como a função de callback é definida.

// 1. Usando uma função de seta (Arrow Function) com chaves

// A sintaxe que você usou, (o) => o == 12, é uma função de seta concisa (implícita). Você pode reescrevê-la para ser mais explícita usando chaves {} e a palavra-chave return.

// Exemplo com retorno explícito
const arr1 = [10, 10, 11];

console.log(
  arr.find((o) => {
    return o == 12;
  })
);

// Saída: undefined

// Embora seja mais verboso, essa forma é útil quando você precisa de mais de uma linha de código dentro da função de callback, como para fazer um log ou executar múltiplas operações.

// 2. Usando uma função anônima

// Antes das funções de seta se tornarem populares (com o ES6), a forma mais comum era usar uma função anônima (sem nome).

// Exemplo com função anônima
const arr2 = [10, 10, 11];

console.log(
  arr.find(function (o) {
    return o == 12;
  })
);

// Saída: undefined

// A palavra-chave function é usada para definir a função de callback, e o this dentro dela se comporta de forma diferente do que em uma função de seta. No entanto, para o método find(), onde o contexto do this não é crucial, ambas as formas funcionam de maneira similar.

// 3. Usando uma função externa nomeada

// Você também pode definir a função de callback separadamente e passá-la como uma referência para o método find().

// Exemplo com função externa
const arr3 = [10, 10, 11];

function encontraDoze(o) {
  return o == 12;
}

console.log(arr.find(encontraDoze));

// Saída: undefined

// Essa abordagem é ideal para situações em que a mesma lógica de busca precisa ser reutilizada em diferentes partes do seu código. Ela torna o código mais limpo e organizado, já que a função tem um nome descritivo que explica o que ela faz.
