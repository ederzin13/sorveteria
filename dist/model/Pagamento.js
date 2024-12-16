"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pagamento {
    constructor(tipoPagamento) {
        this.tipoPagamento = tipoPagamento;
    }
    getTipo() {
        return this.tipoPagamento;
    }
    setTipo(idTipo) {
        this.tipoPagamento = idTipo;
    }
    qualTipo(idTipo) {
        idTipo: this.tipoPagamento;
        switch (idTipo) {
            case "dinheiro":
                this.tipoPagamento = idTipo;
                break;
            case "cartao":
                this.tipoPagamento = idTipo;
                break;
            case "pix":
                this.tipoPagamento = idTipo;
                break;
            default: return; //tratamento de erro aqui?
        }
    }
}
exports.default = Pagamento;
