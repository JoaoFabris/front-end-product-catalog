import { Produto } from "./Produto.js";

console.log("Desafio front-end - Unidade 1");

// 1 ========== VARIAVEIS
const nomeLoja = "Loja de Technologia"
let desconto = 0.1
var categoria = "Eletronico"

console.log("Bem vindo a loja Tech!!!");

// 2========== FUNÇÕES TRADICIONAL
function calcularDesconto(valor, desconto) {
    return valor * (1 - desconto);
}
console.log(`Função tradicional: R$${calcularDesconto(1000, desconto).toFixed(2)}`);

// 3 ========== FUNÇÕES ARROW
const calcularDescontoArrow = (valor, desconto) => valor * (1 - desconto);
console.log(`Arrow function:     R$${calcularDescontoArrow(1000, desconto).toFixed(2)}`)
// 4 ========== OBJETOS E CLASSES
const produtoLiteral = {
    nome: "Mouse",
    preco: 350,
    categoria: "Periférico",
}


// Instâncias da classe Produto (importada do Produto.js)
const p1 = new Produto("Notebook Pro", 4500.0, "Eletrônicos");
const p2 = new Produto("Smartphone X", 3200.0, "Eletrônicos");
const p3 = new Produto("Teclado Mecânico", 380.0, "Periféricos");
const p4 = new Produto("Monitor 4K", 2100.0, "Eletrônicos");
const p5 = new Produto("Headset RGB", 650.0, "Periféricos");

console.log(produtoLiteral);
console.log(p1.exibirInfo());
console.log(`Com desconto: R$${p1.aplicarDesconto(desconto).toFixed(2)}`);


//crie um array com 5 produtos (objetos ou instâncias da classe).
const catalogo = [p1, p2, p3, p4, p5];

// listar os nomes com map
const nomeMap = catalogo.map((produto) => produto.nome);
console.log("Nomes dos produtos:", nomeMap);


//filter → filtre produtos de uma categoria específica.
const eletronicos = catalogo.filter((p) => p.categoria === "Eletrônicos");
console.log("Eletrônicos:", eletronicos.map(p => p.nome));

//reduce - calcule o preço total
const precoTotal = catalogo.reduce((total, produto) => total + produto.preco, 0)
console.log(`Preço total do catálogo: R$${precoTotal.toFixed(2)}`);

// 5. DESTRUCTURING E TEMPLATE LITERALS
const { nome, preco, categoria: categoriaProduto } = p1;
console.log(`${nome} custa R$${preco}`);

// Destructuring em array
const [primeiro, segundo, terceiro] = catalogo;
console.log(`Primeiro: ${primeiro.nome} | Segundo: ${segundo.nome}`);


// 7. OPERADORES
const LIMITE_PROMOCAO = 500;
catalogo.forEach((p) => {
    const status = p.preco > LIMITE_PROMOCAO ? " Premium" : " Promoção";
    console.log(`${p.nome}: ${status}`);
});

const novoProduto = new Produto("Webcam HD", 320.0, "Periféricos");
const catalogoAtualizado = [...catalogo, novoProduto];

console.log("── Spread Operator ──");
console.log(`Catálogo original: ${catalogo.length} produtos`);
console.log(`Catálogo atualizado: ${catalogoAtualizado.length} produtos`);
console.log("Último adicionado:", catalogoAtualizado.at(-1).exibirInfo());

console.log("\n" + "═".repeat(50));
console.log(" Todos os conceitos da Unidade 1 aplicados com sucesso!");
