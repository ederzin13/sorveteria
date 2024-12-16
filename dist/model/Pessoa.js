"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = __importDefault(require("./Cliente"));
class Pessoa extends Cliente_1.default {
    constructor(nome, phone, cpf) {
        super(nome, phone);
        this.cpf = cpf;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    encomenda(quantSorvetes) {
        console.log(`Cliente ${this.name} encomendou ${quantSorvetes} sorvetes!`);
    }
}
exports.default = Pessoa;
