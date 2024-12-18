"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErroPagamento {
    constructor(message = "Tipo de pagamento inválido! Escolha entre: 1, 2, 3.") {
        this.message = message;
    }
    getMessage() {
        return this.message;
    }
}
exports.default = ErroPagamento;
