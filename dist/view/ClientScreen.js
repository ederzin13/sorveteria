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
    // public registerEscola(): void {
    //     let school: Escola = this.router.schoolController.getNewSchool();
    //     let schoolName = this.prompt("Qual o nome da escola?");
    //     school.setName(schoolName);
    //     let schoolPhone = this.prompt("Qual o número de telefone?");
    //     school.setPhone(+schoolPhone);
    //     let schoolCnpj = this.prompt("Qual o CNPJ?");
    //     school.setCnpj(+schoolCnpj);
    //     this.router.schoolController.addNewSchool(school);
    //     console.log("Escola adicionada");
    // }
    registerPessoa() {
        let person = this.router.clientController.getNewPessoa();
        let clientName = this.prompt("Qual o nome do cliente?");
        person.setName(clientName);
        this.router.clientController.addNewClient(person);
        console.log("Cliente adicionado");
    }
}
exports.default = ClientScreen;
