"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Database_1 = __importDefault(require("../db/Database"));
class PedidoScreen {
    constructor(router) {
        this.prompt = (0, prompt_sync_1.default)();
        this.db = new Database_1.default();
        this.router = router;
    }
    registerPedido() {
        let newPedido = this.router.pedidoController.getNewPedido();
        this.pedido = newPedido;
        let idPedido = this.prompt("Id do pedido");
        newPedido.setId(+idPedido);
        let quantItens = this.prompt("Quantos itens tem o pedido?");
        newPedido.setQuant(+quantItens);
        console.log(`O valor do pedido ficou R$${this.calculaTotal()}\n`);
    }
    calculaTotal() {
        let total = (this.pedido.getQuant() * 1.5);
        return total;
    }
}
exports.default = PedidoScreen;
