function contarPalavras(texto) {

    texto = texto.toLowerCase();

    texto = texto.replace(/[.,!?;:]/g, "");

    const palavras = texto.split(/\s+/);

    const frequencias = {};

    for (const palavra of palavras) {

        if (frequencias[palavra]) {
            frequencias[palavra]++;
        } else {
            frequencias[palavra] = 1;
        }
    }

    return frequencias;
}

function palavrasMaisUsadas(texto, quantidade) {

    const frequencias = contarPalavras(texto);

    const palavras = Object.entries(frequencias);

    palavras.sort((a, b) => b[1] - a[1]);

    return palavras.slice(0, quantidade);
}

const frase = "O rato roeu a roupa. O rato fugiu!";

console.log(contarPalavras(frase));

console.log(palavrasMaisUsadas(frase, 2));