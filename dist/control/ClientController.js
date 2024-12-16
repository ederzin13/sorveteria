"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("../model/Pessoa"));
class ClientController {
    constructor(db) {
        this.db = db;
    }
    // public getNewClient(): Client {
    //     return new Client(); 
    // }
    getNewPessoa() {
        return new Pessoa_1.default();
    }
    addNewClient(client) {
        this.db.addClient(client);
    }
    listClients() {
        this.db.listClients();
    }
}
exports.default = ClientController;
