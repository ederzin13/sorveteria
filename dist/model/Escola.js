"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = __importDefault(require("./Cliente"));
class Escola extends Cliente_1.default {
    getCnpj() {
        return this.cnpj;
    }
    setCnpj(cnpj) {
        this.cnpj = cnpj;
    }
    getAddress() {
        return this.endereco;
    }
    setAddress(address) {
        this.endereco = address;
    }
    encomenda(quantSorvetes) {
        console.log(`Escola ${this.name} encomendou ${quantSorvetes} sorvetes!`);
    }
}
exports.default = Escola;
