"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pedido_1 = __importDefault(require("./Pedido"));
class PedidoCarrinho extends Pedido_1.default {
    constructor() {
        super(...arguments);
        this.FRETE = 40; //
    }
    somaFrete() {
        let total = this.getSubTotal() + this.FRETE;
        return total;
    }
    temDesconto() {
        if (this.getQuant() >= 150 && this.temEntrega == true)
            return true;
        else
            return false;
    }
    aplicaDesconto() {
        let desconto = this.getQuant() * 0.3;
        return desconto;
    }
}
exports.default = PedidoCarrinho;
