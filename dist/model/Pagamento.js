"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErroPagamento_1 = __importDefault(require("../exceptions/ErroPagamento"));
class Pagamento {
    constructor(tipoPagamento) {
        this.tipoPagamento = tipoPagamento;
        console.log(this.tipoPagamento);
        this.qualTipo(tipoPagamento);
    }
    qualTipo(tipoPagamento) {
        if (tipoPagamento == 1 || tipoPagamento == 2 || tipoPagamento == 3) {
            console.log("Tipo de pagamento válido!");
        }
        else {
            throw new ErroPagamento_1.default("Tipo de pagamento inválido");
        }
    }
}
exports.default = Pagamento;
