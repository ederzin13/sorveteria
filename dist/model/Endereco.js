"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Endereco {
    constructor() {
    }
    getRua() {
        return this.rua;
    }
    setRua(rua) {
        this.rua = rua;
    }
    getBairro() {
        return this.bairro;
    }
    setBairro(bairro) {
        this.bairro = bairro;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getCep() {
        return this.cep;
    }
    setCep(cep) {
        this.cep = cep;
    }
}
exports.default = Endereco;
