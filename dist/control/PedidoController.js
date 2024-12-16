"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pedido_1 = __importDefault(require("../model/Pedido"));
class PedidoController {
    constructor(db) {
        this.db = db;
    }
    getNewPedido() {
        return new Pedido_1.default();
    }
    addNewPedido(pedido) {
        this.db.addPedido(pedido);
    }
    listPedidos() {
        this.db.listPedidos();
    }
}
exports.default = PedidoController;
