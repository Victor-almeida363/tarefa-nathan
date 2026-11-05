function calcularPrecoFinal(preco, desconto) {
    if (desconto < 0 || desconto > 100) {
        return null;
    }

    const valorDesconto = preco * (desconto / 100);

    const precoFinal = preco - valorDesconto;

    return precoFinal;
}

const formatarMoeda = (valor) => {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
};

console.log(calcularPrecoFinal(200, 15));
console.log(calcularPrecoFinal(200, 120));
console.log(formatarMoeda(170));