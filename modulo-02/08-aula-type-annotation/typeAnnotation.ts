// ==> Variáveis [Type Annotations]
let nome: string = "Lipi"

console.log(nome.toUpperCase())

// ==> Arrays [Type Annotations]
let animais: string[] = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa']
console.log(animais[0])

// ==> Objetos [Type Annotations]
let carro: {
    nome: string;
    ano: number;
    preco: number;
}

carro = {nome: 'Fusca', ano: 1993, preco: 5000}
console.log(carro)

// ==> Functions [Type Annotation]
function multiplicarNumero(num1: number, num2: number){
    return num1 * num2
}

console.log(multiplicarNumero(3,4))