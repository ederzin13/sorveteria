"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErroPagamento {
    constructor(message = "Pai dos erros", tipo = 1) {
        this.message = message;
        this.tipoPagamento = tipo;
    }
}
exports.default = ErroPagamento;
