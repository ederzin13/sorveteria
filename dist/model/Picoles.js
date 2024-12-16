"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Picoles {
    constructor(tipo) {
        this.valor = 1.5;
        this.tipo = tipo;
    }
    getTipo() {
        return this.tipo;
    }
    getValor() {
        return this.valor;
    }
    setValor(valor) {
        this.valor = valor;
    }
}
exports.default = Picoles;
