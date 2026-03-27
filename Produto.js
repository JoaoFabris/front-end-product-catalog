export class Produto {
    constructor(nome, preco, categoria) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria
    }

    // Aplicar desconto
    aplicarDesconto(desconto) {
        return this.preco * (1 - desconto);
    }

    // exibit informações do produto
    exibirInfo() {
        return `Nome: ${this.nome} | Preço: R$${this.preco}`;
    }
}