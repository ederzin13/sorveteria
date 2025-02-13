"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class SchoolScreen {
    constructor(router) {
        this.prompt = (0, prompt_sync_1.default)();
        this.router = router;
    }
    registerSchool() {
        let school = this.router.schoolController.getNewSchool();
        let schoolName = this.prompt("Qual o nome da escola?");
        school.setName(schoolName);
        let cnpj = this.prompt("Qual o CNPJ?");
        school.setCnpj(parseInt(cnpj));
        this.router.schoolController.addNewSchool(school);
        console.log("Escola adicionada");
    }
}
exports.default = SchoolScreen;
