"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Picoles {
    constructor(tipo, sabor) {
        this.quantidade = "2";
        this.valor = 1.5;
        this.tipo = tipo;
        this.sabor = sabor;
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
