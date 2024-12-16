"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class ClientScreen {
    constructor(router) {
        this.prompt = (0, prompt_sync_1.default)();
        this.router = router;
    }
    registerClient() {
        let cliente = this.router.clientController.getNewPessoa();
        let clientName = this.prompt("Qual o nome do cliente?");
        cliente.setName(clientName);
        this.router.clientController.addNewClient(cliente);
        console.log("Cliente adicionado");
    }
}
exports.default = ClientScreen;
