
const alunos = [
    { nome: "Ana", notas: [8, 9, 7] },
    { nome: "Bruno", notas: [5, 6, 4] },
    { nome: "Carla", notas: [10, 9, 8] },
    { nome: "Diego", notas: [7, 6, 8] },
];

function calcularMedia(notas) {
    let soma = 0;

    for (const nota of notas) {
        soma += nota;
    }

    return soma / notas.length;
}

let maiorMedia = -Infinity;
let melhorAluno = "";

for (const aluno of alunos) {

    const media = calcularMedia(aluno.notas);

    let situacao;

    if (media < 0 || media > 10) {
        situacao = "Nota inválida";
    } else if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    console.log(
        `${aluno.nome}: ${media.toFixed(1)} (${situacao})`
    );

    if (media > maiorMedia) {
        maiorMedia = media;
        melhorAluno = aluno.nome;
    }
}

console.log("Maior média:", melhorAluno);