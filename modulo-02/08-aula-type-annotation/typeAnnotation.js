"use strict";
// ==> Variáveis [Type Annotations]
let nome = "Lipi";
console.log(nome.toUpperCase());
// ==> Arrays [Type Annotations]
let animais = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa'];
console.log(animais[0]);
// ==> Objetos [Type Annotations]
let carro;
carro = { nome: 'Fusca', ano: 1993, preco: 5000 };
console.log(carro);
// ==> Functions [Type Annotation]
function multiplicarNumero(num1, num2) {
    return num1 * num2;
}
console.log(multiplicarNumero(3, 4));
