const numeros = [12, 5, 8, 21, 3, 17];

let maior = numeros[0];
let menor = numeros[0];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] > maior) {
        maior = numeros[i];
    }

    if (numeros[i] < menor) {
        menor = numeros[i];
    }

    soma += numeros[i];
}

const media = soma / numeros.length;

console.log("Maior:", maior);
console.log("Menor:", menor);
console.log("Média:", media);