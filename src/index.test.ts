import Pedido from "./model/Pedido";

let novoPedido: Pedido = new Pedido();
novoPedido.setQuant(90);

let maisUmPedido: Pedido = new Pedido();
maisUmPedido.setQuant(110);

test("Teste do desconto para pedido com 90 itens", () => {
    expect(novoPedido.temDesconto()).toBe(false);
})

test("Teste do desconto para pedido com 110 itens", () => {
    expect(maisUmPedido.temDesconto()).toBe(true);
})