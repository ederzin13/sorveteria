"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pedido {
    constructor() {
        if (this.temDesconto()) {
            this.subTotal = this.subTotal - this.aplicaDesconto();
        }
    }
    getCliente() {
        return this.cliente;
    }
    setCliente(cliente) {
        this.cliente = cliente;
    }
    getQuant() {
        return this.quantItens;
    }
    setQuant(quantidade) {
        this.quantItens = quantidade;
    }
    getForma() {
        return this.formaPagamento;
    }
    setForma(forma) {
        this.formaPagamento = forma;
    }
    getEndereco() {
        return this.endereco;
    }
    setEndereco(endereco) {
        this.endereco = endereco;
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
    getHorario() {
        return this.horario;
    }
    setHorario(horario) {
        this.horario = horario;
    }
    getSubTotal() {
        return this.subTotal;
    }
    setSubTotal(subTotal) {
        this.subTotal = subTotal;
    }
    getTotal() {
        return this.valorTotal;
    }
    setTotal(valorTotal) {
        this.valorTotal = valorTotal;
    }
    temDesconto() {
        if (this.getQuant() >= 100)
            return true;
        else
            return false;
    }
    aplicaDesconto() {
        let desconto = this.quantItens * 0.2;
        return desconto;
    }
}
exports.default = Pedido;
