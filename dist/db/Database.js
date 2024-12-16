"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    constructor() {
        this.clientes = [];
        this.escolas = [];
        this.enderecos = [];
        this.picoles = [];
        this.pedidos = [];
    }
    addClient(cliente) {
        this.clientes.push(cliente);
    }
    addAddress(endereco) {
        this.enderecos.push(endereco);
    }
    addPopsicle(picole) {
        this.picoles.push(picole);
    }
    addSchool(escola) {
        this.escolas.push(escola);
    }
    addPedido(pedido) {
        this.pedidos.push(pedido);
    }
    //métodos para listar o conteúdo dos arrays
    listClients() {
        for (let i = 0; i <= this.clientes.length; i++)
            console.log(this.clientes[i]);
    }
    listAddressess() {
        for (let i = 0; i <= this.enderecos.length; i++)
            console.log(this.enderecos[i]);
    }
    listPopsicles() {
        for (let i = 0; i <= this.picoles.length; i++)
            console.log(this.picoles[i]);
    }
    listSchools() {
        for (let i = 0; i <= this.escolas.length; i++)
            console.log(this.escolas[i]);
    }
    listPedidos() {
        for (let i = 0; i <= this.pedidos.length; i++)
            console.log(this.pedidos[i]);
    }
}
exports.default = Database;
