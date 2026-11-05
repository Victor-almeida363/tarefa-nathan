
const a = 10;
const b = 5;
const operador = "*";

let resultado;

switch (operador) {
    case "+":
        resultado = a + b;
        break;

    case "-":
        resultado = a - b;
        break;

    case "*":
        resultado = a * b;
        break;

    case "/":
        if (b === 0) {
            console.log("Não é possível dividir por zero");
        } else {
            resultado = a / b;
        }
        break;

    default:
        console.log("Operador inválido");
}

if (resultado !== undefined) {
    console.log("Resultado:", resultado);
}
