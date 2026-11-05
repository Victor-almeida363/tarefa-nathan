let soma = 0;

for (let i = 1; i <= 10; i++) {
    let resultado = 7 * i;

    console.log(`7 x ${i} = ${resultado}`);

    soma += resultado;
}

console.log("Soma dos resultados:", soma);