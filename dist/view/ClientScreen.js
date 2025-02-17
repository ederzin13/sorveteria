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
    registerPessoa() {
        let person = this.router.clientController.getNewPessoa();
        let clientName = this.prompt("Qual o nome do cliente?");
        person.setName(clientName.toUpperCase());
        let clientPhone = this.prompt("Qual o número de telefone?");
        person.setPhone(+clientPhone);
        let clientCpf = this.prompt("Qual o CPF?");
        person.setCpf(+clientCpf);
        this.router.clientController.addNewClient(person);
        console.log("Cliente adicionado");
    }
}
exports.default = ClientScreen;
