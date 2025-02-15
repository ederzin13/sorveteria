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
        let pedido = this.router.pedidoController.getNewPedido();
        let idPedido = this.prompt("Id do pedido");
        let idConvertido = +idPedido;
        pedido.setId(idConvertido);
        //let cliente: Client = this.router.clientController.getNewPessoa();
        let cliente;
        let novoPedido = this.router.pedidoController.addNewPedido(pedido);
    }
}
exports.default = PedidoScreen;
