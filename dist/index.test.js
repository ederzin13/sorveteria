"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pedido_1 = __importDefault(require("./model/Pedido"));
let novoPedido = new Pedido_1.default();
novoPedido.setQuant(90);
let maisUmPedido = new Pedido_1.default();
maisUmPedido.setQuant(110);
test("Teste do desconto para pedido com 90 itens", () => {
    expect(novoPedido.temDesconto()).toBe(false);
});
test("Teste do desconto para pedido com 110 itens", () => {
    expect(maisUmPedido.temDesconto()).toBe(true);
});
