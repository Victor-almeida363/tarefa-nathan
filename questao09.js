function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id <= 0) {
                reject(new Error("ID inválido"));
            } else {
                resolve({
                    id: id,
                    nome: "Usuário " + id
                });
            }
        }, 1000);
    });
}

function buscarPedidos(usuarioId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, total: 250 },
                { id: 2, total: 130 }
            ]);
        }, 1000);
    });
}

async function mostrarResumo(id) {
    try {
        const usuario = await buscarUsuario(id);
        const pedidos = await buscarPedidos(usuario.id);

        const total = pedidos.reduce(
            (soma, pedido) => soma + pedido.total,
            0
        );

        console.log(
            `${usuario.nome} tem ${pedidos.length} pedidos no total de R$ ${total}`
        );

    } catch (erro) {
        console.log("Erro: " + erro.message);
    }
}

mostrarResumo(1);
mostrarResumo(-1);

console.time("Tempo de execução");

Promise.all([
    buscarUsuario(1),
    buscarUsuario(2),
    buscarUsuario(3)
])
.then((usuarios) => {
    console.log("Usuários encontrados:", usuarios);
    console.timeEnd("Tempo de execução");
})
.catch((erro) => {
    console.log("Erro:", erro.message);
});
