
const produtos = [
    { id: 1, nome: "Teclado", preco: 150, categoria: "periféricos", estoque: 10 },
    { id: 2, nome: "Mouse", preco: 80, categoria: "periféricos", estoque: 0 },
    { id: 3, nome: "Monitor", preco: 900, categoria: "telas", estoque: 4 },
    { id: 4, nome: "Notebook", preco: 3500, categoria: "computadores", estoque: 2 },
    { id: 5, nome: "Headset", preco: 220, categoria: "periféricos", estoque: 6 },
];

const produtosEmEstoque = produtos.filter(produto => produto.estoque > 0);

console.log("Produtos em estoque:", produtosEmEstoque);

const nomesProdutos = produtos.map(produto => produto.nome.toUpperCase());

console.log("Nomes:", nomesProdutos);

const produtoEncontrado = produtos.find(produto => produto.id === 3);

console.log("Produto encontrado:", produtoEncontrado);

const valorTotal = produtos.reduce((total, produto) => {
    return total + (produto.preco * produto.estoque);
}, 0);

console.log("Valor total do estoque:", valorTotal);

const quantidadeCategorias = produtos.reduce((contador, produto) => {
    const categoria = produto.categoria;

    if (contador[categoria]) {
        contador[categoria]++;
    } else {
        contador[categoria] = 1;
    }

    return contador;
}, {});

console.log("Produtos por categoria:", quantidadeCategorias);