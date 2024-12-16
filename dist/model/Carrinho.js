"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Carrinho {
    constructor() {
        if (this.isDisponivel())
            Carrinho.quantos--;
    }
    getQuantos() {
        return Carrinho.quantos;
    }
    getCapacidade() {
        return this.capacidade;
    }
    setCapacidade(capacidade) {
        this.capacidade = capacidade;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getCliResp() {
        return this.clienteResp;
    }
    setCliResp(clienteResp) {
        this.clienteResp = clienteResp;
    }
    isDisponivel() {
        if (Carrinho.quantos == 0) {
            console.log("Carrinhos indisponíveis");
            return false;
        }
        else {
            console.log("Carrinho disponível!");
        }
        return true;
    }
}
Carrinho.quantos = 3;
exports.default = Carrinho;
