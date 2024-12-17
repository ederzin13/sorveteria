"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErroPagamento_1 = __importDefault(require("../exceptions/ErroPagamento"));
class Pagamento {
    constructor(tipoPagamento) {
        this.tipoPagamento = tipoPagamento;
        if (tipoPagamento == 1 || 2 || 3) {
            console.log("Tipo de pagamento válido!");
        }
        else {
            throw new ErroPagamento_1.default("Forma de pagamento inválida");
        }
    }
    qualTipo(tipoPagamento) {
        try {
            if (tipoPagamento == 1 || 2 || 3) {
                return tipoPagamento;
            }
            ;
        }
        catch (erro) {
            console.error("Ocorreu um erro: " + erro.message);
        }
        finally {
            console.log("Deu certo");
        }
    }
}
exports.default = Pagamento;
// export default class Pagamento {
//     private tipoPagamento!: "dinheiro" | "cartão" | "pix";
//     public constructor(tipoPagamento: "dinheiro" | "cartão" | "pix") {
//         this.tipoPagamento = tipoPagamento;
//     }
//     public getTipo(): "dinheiro" | "cartão" | "pix"{
//         return this.tipoPagamento;
//     }
//     public setTipo("dinheiro" | "cartão" | "pix"): void {
//         this.tipoPagamento = idTipo;
//     }
//     public qualTipo(idTipo: "dinheiro" | "cartão" | "pix") {
//         idTipo: this.tipoPagamento;
// switch(idTipo) {
//     case 1: this.tipoPagamento = idTipo;
//     break;
//     case 2: this.tipoPagamento = idTipo;
//     break;
//     case 3: this.tipoPagamento = idTipo;
//     break;
//     default: return; 
// }
//     }
