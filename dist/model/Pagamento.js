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
        try {
            if (tipoPagamento == 1 || tipoPagamento == 2 || tipoPagamento == 3) {
                console.log("Tipo de pagamento válido!");
            }
            else {
                let erro = new ErroPagamento_1.default();
                throw erro.getMessage();
            }
        }
        catch (erro) {
            console.error(`Ocorreu um erro: ${erro}`);
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
