const nota = 2;

if (nota < 0 || nota > 10) {
    console.log("Nota inválida");
} else if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}